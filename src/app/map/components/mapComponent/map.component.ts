import { Component } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { MockData, MockPoints, MockPolygon, MockPolyline } from './mockData';
import { IMapState } from '../../interfaces/map.interfaces';
import { AcNotification, ActionType } from 'angular-cesium';
import { Guid } from 'guid-typescript';
import { Store } from '@ngrx/store';
import { entitiesSelector } from '../../store/map.selectors';
import { DeleteAction, LoadAction } from '../../store/map.actions';


@Component({
  selector: 'research-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {
  public id: Guid;
  entities$ = this.store.select(entitiesSelector);
  mockDataSrc$;
  testArr: AcNotification[] = [];

  constructor(private store: Store<IMapState>) {
    this.mockDataSrc$ = Observable.from(MockData);
  }

  getMockData(type: string = 'coordinates') {
    if (type === 'coordinates') {
      return this.mockDataSrc$.map(entity => ({
        actionType: ActionType.ADD_UPDATE,
        id: this.id = Guid.create(),
        entity: ({
            name: 'test',
            image: new Cesium.PinBuilder().fromText('?', Cesium.Color.BLACK, 48).toDataURL(),
            bbPosition: new Cesium.Cartesian3.fromDegrees(entity.position.x, entity.position.y)
          }
        )
      }));
    } else if (type === 'points') {
      return this.mockDataSrc$.map(entity => ({
        actionType: ActionType.ADD_UPDATE,
        id: this.id = Guid.create(),
        entity: ({
            name: 'test',
            pointPosition: new Cesium.Cartesian3.fromDegrees(...entity.coordinates),
            pixelSize: 50,
            color: Cesium.Color.fromRandom()
          }
        )
      }));
    } else if (type === 'polygons') {
      return this.mockDataSrc$.map(entity => ({
        actionType: ActionType.ADD_UPDATE,
        id: this.id = Guid.create(),
        entity: ({
            name: 'test',
            hierarchy: Cesium.Cartesian3.fromDegreesArray(entity.coordinates),
            extrudedHeight: 500000.0,
            material: Cesium.Color.GREEN,
            closeTop: false,
            closeBottom: false
          }
        )
      }));
    } else if (type === 'polylines') {
      return this.mockDataSrc$.map(entity => ({
        actionType: ActionType.ADD_UPDATE,
        id: this.id = Guid.create(),
        entity: ({
            name: 'test',
            positions: Cesium.Cartesian3.fromDegreesArray(entity.coordinates),
            width: 4,
            material: new Cesium.PolylineDashMaterialProperty({
              color: Cesium.Color.CYAN
            })
          }
        )
      }));
    }
  }

  testDispatch(type: string = 'coordinates') {
    if (type === 'coordinates') {
      this.mockDataSrc$ = Observable.from(MockData);
    } else if (type === 'points') {
      this.mockDataSrc$ = Observable.from(MockPoints);
    } else if (type === 'polygons') {
      this.mockDataSrc$ = Observable.from(MockPolygon);
    } else if (type === 'polylines') {
      this.mockDataSrc$ = Observable.from(MockPolyline);
    }


    this.getMockData(type).subscribe(x => this.testArr.push(x));

    this.store.dispatch(new LoadAction(this.testArr));
  }

  removeData() {
    this.store.dispatch(new DeleteAction(this.testArr));
  }
}
