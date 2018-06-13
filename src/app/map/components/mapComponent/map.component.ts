import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { MockBb, MockPointBb, MockPoints, MockPointsLarge, MockPolygon, MockPolyline } from './mockData';
import { IMapState } from '../../interfaces/map.interfaces';
import {  AcNotification, ActionType } from 'angular-cesium';
import { Guid } from 'guid-typescript';
import { Store } from '@ngrx/store';
import { DeleteAction, LoadAction } from '../../store/map.actions';
import { EntityEnum, MiskEntity } from '../../interfaces/entity.inteface';
import { MapService } from '../../services/map.service';


@Component({
  selector: 'research-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})

export class MapComponent {
  public id: Guid;

  entitiesArr: AcNotification[] = [];

  dictionary = {
    /* 'point': MockPoints */
    [EntityEnum.point]: MockPointsLarge,
    [EntityEnum.billboard]: MockBb,
    [EntityEnum.polygon]: MockPointBb,
    [EntityEnum.misc]: MockPointBb,
    [EntityEnum.polyline]: MockPolyline
  };

  constructor(private store: Store<IMapState>, private mapService: MapService) {
  }

  testDispatch(entityType = EntityEnum.misc): any {
    return Observable.of(this.dictionary[entityType])
    /*
       [
         { point?: Point, billboard?: Billbo, polygon?: Polygon ],
         { point?: Point, billboard?: Billbo, polygon?: Polygon ],
       ]
    */
      .map((entities: MiskEntity[]) => entities.map((entity) => this.getMockData(entity)))
      /*
         [
           [{point?}, {billboard?}, {polygon?}],
           [{point?}, {billboard?}, {polygon?}],
         ]
      */

      .subscribe((parsedEntities: any[]) => {
        this.store.dispatch(new LoadAction(parsedEntities));
      });
  }

  getMockData(entity: MiskEntity): any[] {
    return Object.keys(entity)
      .filter((key: EntityEnum) => Object.values(EntityEnum).includes(key))
      .map((key: EntityEnum) => ({
        actionType: ActionType.ADD_UPDATE,
        id: this.generateId(),
        entity: this.mapService.fillEntityData(key, entity)
      }));
  }

  generateId(): any {
    this.id = Guid.create();
    return this.id;
  }

  removeData() {
    this.store.dispatch(new DeleteAction());
  }

}
