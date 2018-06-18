import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  AcLayerComponent,
  AcNotification,
  ActionType,
  CesiumEvent,
  CesiumService,
  MapEventsManagerService,
  PickOptions
} from 'angular-cesium';
import { entitiesSelector, showPointsSelector } from '../../store/map.selectors';
import { Store } from '@ngrx/store';
import 'rxjs-compat/add/operator/filter';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/withLatestFrom';
import { IMapState } from '../../interfaces/map.interfaces';
import { EntitesType, EntityEnum, MiscEntity } from '../../interfaces/entity.inteface';
import { MockBb, MockPointBb, MockPointsLarge, MockPolyline } from '../mapComponent/mockData';
import { Observable } from 'rxjs/Observable';
import { Guid } from 'guid-typescript';
import { LoadAction } from '../../store/map.actions';
import { MapService } from '../../services/map.service';
import { IconsSvg } from '../../interfaces/iconsSvg';

@Component({
  selector: 'research-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css'],
  providers: [MapService]
})
export class EntitiesComponent implements OnInit, OnDestroy {
  @ViewChild(AcLayerComponent) layer: AcLayerComponent;
  testDataSubscription: Subscription;
  entities$ = this.store.select(entitiesSelector);
  showPoint$ = this.store.select(showPointsSelector);
  lastPickedEntity;
  showPoints: Boolean = false;

  largeAmountEntities$: Subject<AcNotification> = new Subject<AcNotification>();

  dictionary = {
    /* 'point': MockPoints */
    [EntityEnum.point]: MockPointsLarge,
    [EntityEnum.billboard]: MockBb,
    [EntityEnum.polygon]: MockPointBb,
    [EntityEnum.misc]: MockPointsLarge,
    [EntityEnum.polyline]: MockPolyline
  };


  constructor(private store: Store<IMapState>, private mapService: MapService, private mapEventsManager: MapEventsManagerService) {
    setTimeout(() => {
      this.dispatchFlights(EntityEnum.misc).subscribe(parsedEntities => {
          this.store.dispatch(new LoadAction(parsedEntities));
        }
      );
    }, 0);
    this.entities$.subscribe(entities => entities.forEach(entity => {
      this.largeAmountEntities$.next(entity);
    }));

    this.showPoint$.subscribe(x => this.showPoints = x);
  }

  dispatchFlights(entityType = EntityEnum.misc): any {
    return Observable.of(this.dictionary[entityType])
      .map((entities: MiscEntity[]) => entities.map((entity) => this.getMockData(entity)));
  }

  getMockData(entity: MiscEntity): AcNotification {
    const guid = Guid.create();
    const id = guid.toString();
    return {
      actionType: ActionType.ADD_UPDATE,
      id: id,
      entity: this.mapService.fillEntityData(EntityEnum[Object.keys(entity)[0]], entity, id)
    };
  }

  ngOnInit() {
    const mouseOverObservable = this.mapEventsManager.register({
      event: CesiumEvent.LEFT_CLICK,
      pick: PickOptions.PICK_FIRST,
      priority: 2

    });
    // Change color on hover
    mouseOverObservable.subscribe((event) => {
      const track = event.entities !== null ? event.entities[0] : null;
      if (this.lastPickedEntity && (!track || track.id !== this.lastPickedEntity.id)) {
        this.lastPickedEntity.picked = false;
        this.layer.update(this.lastPickedEntity, this.lastPickedEntity.id);
      }
      if (track && (!this.lastPickedEntity || track.id !== this.lastPickedEntity.id)) {
        track.picked = true;
        this.layer.update(track, track.id);
      }
      this.lastPickedEntity = track;
    });
  }

  ngOnDestroy() {
    this.testDataSubscription.unsubscribe();
  }

  isEntityPicked(entity: any) {
    console.log('yay');
    if (entity.picked) {
      return Cesium.Color.YELLOW;
    } else{
      return Cesium.Color.BLACK;
    }
  }

  enlargedEntity(entity: any) {
    if (entity.picked) {
      return 0.3;
    } else{
      return 0.1;
    }
  }

}
