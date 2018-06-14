import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AcNotification, ActionType } from 'angular-cesium';
import { entitiesSelector } from '../../store/map.selectors';
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


@Component({
  selector: 'research-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.css'],
  providers: [MapService]
})
export class EntitiesComponent implements OnInit, OnDestroy {
  testDataSubscription: Subscription;
  entities$ = this.store.select(entitiesSelector);

  mockDataExample$: Subject<AcNotification> = new Subject<AcNotification>();
  entitiesType: EntitesType = EntitesType.ALL;
  largeAmountEntities$: Subject<AcNotification> = new Subject<AcNotification>();

  dictionary = {
    /* 'point': MockPoints */
    [EntityEnum.point]: MockPointsLarge,
    [EntityEnum.billboard]: MockBb,
    [EntityEnum.polygon]: MockPointBb,
    [EntityEnum.misc]: MockPointsLarge,
    [EntityEnum.polyline]: MockPolyline
  };


  constructor(private store: Store<IMapState>, private mapService: MapService) {
    setTimeout(() => {
      this.testDispatch(EntityEnum.misc).subscribe(parsedEntities => {
        this.store.dispatch(new LoadAction(parsedEntities));
        }
      );
    }, 0);
    this.entities$.subscribe(entities => entities.forEach(entity => {
      this.largeAmountEntities$.next(entity);
    }))
  }


  testDispatch(entityType = EntityEnum.misc): any {
    return Observable.of(this.dictionary[entityType])
      .map((entities: MiscEntity[]) => entities.map((entity) => this.getMockData(entity)));
  }

  getMockData(entity: MiscEntity): AcNotification {
    return {
      actionType: ActionType.ADD_UPDATE,
      id: this.generateId(),
      entity: this.mapService.fillEntityData(EntityEnum[Object.keys(entity)[0]], entity)
    };
  }

  generateId(): any {
    const id = Guid.create();
    return id;
  }


  ngOnInit() {
    // setTimeout(() => {
    //   this.testDataSubscription = this.entities$.subscribe(x => {
    //     x.forEach(y => {
    //       if (!Array.isArray(y)) {
    //         this.mockDataExample$.next(y);
    //       } else {
    //         this.mockDataExample$.next(y[0]);
    //       }
    //     });
    //   });
    // }, 0);
  }

  ngOnDestroy() {
    this.testDataSubscription.unsubscribe();
  }

  displayLargeAmount() {
    this.entitiesType = EntitesType.SIMULATED_ENTITIES;
  }
}
