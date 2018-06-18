import { Injectable } from '@angular/core';
import { EntityEnum, IAllEntity, IBillboard, IconsArr, IPoint, IPolygon, IPolyline } from '../interfaces/entity.inteface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {
  }

  fillEntityData(type = EntityEnum.billboard, data, id) {
    switch (type) {
      case EntityEnum.point:
        const point: IPoint = {
          name: type,
          pointPosition: new Cesium.Cartesian3.fromDegrees(...data[type].position),
          pixelSize: 10,
          color: Cesium.Color.fromRandom().withAlpha(0.9),
          distanceDisplayConditionPoint: new Cesium.DistanceDisplayCondition(5.5e6),
          id
        };
        return point;

      case EntityEnum.billboard:
        const billboard: IBillboard = {
          name: type,
          bbPosition: new Cesium.Cartesian3.fromDegrees(data[type].x, data[type].y),
          scale: 0.1,
          image: IconsArr[Math.floor(Math.random() * IconsArr.length)],
          distanceDisplayConditionBb: new Cesium.DistanceDisplayCondition(0.0, 5.5e6),
          id
        };
        return billboard;

      case EntityEnum.polygon:
        const polygon: IPolygon = {
          name: type,
          hierarchy: Cesium.Cartesian3.fromDegreesArray(data[type].coordinates),
          extrudedHeight: 500000.0,
          materialPolygon: Cesium.Color.GREEN,
          closeTop: false,
          closeBottom: false,
          id
        };
        return polygon;

      case EntityEnum.polyline:
        const polyline: IPolyline = {
          name: type,
          positions: Cesium.Cartesian3.fromDegreesArray(data[type].coordinates),
          width: 4,
          materialPolyline: new Cesium.PolylineDashMaterialProperty({
            color: Cesium.Color.CYAN
          }),
          id
        };
        return polyline;

      case EntityEnum.misc:
        const allEntities: IAllEntity = {
          name: type,
          pointPosition: new Cesium.Cartesian3.fromDegrees(...data[type].position),
          pixelSize: 10,
          color: Cesium.Color.fromRandom().withAlpha(0.9),
          distanceDisplayConditionPoint: new Cesium.DistanceDisplayCondition(5.5e6),
          bbPosition: new Cesium.Cartesian3.fromDegrees(data[type].x, data[type].y),
          scale: 0.1,
          image: IconsArr[Math.floor(Math.random() * IconsArr.length)],
          distanceDisplayConditionBb: new Cesium.DistanceDisplayCondition(0.0, 5.5e6),
          hierarchy: Cesium.Cartesian3.fromDegreesArray(data[type].coordinates),
          extrudedHeight: 500000.0,
          materialPolygon: Cesium.Color.GREEN,
          closeTop: false,
          closeBottom: false,
          positions: Cesium.Cartesian3.fromDegreesArray(data[type].coordinates),
          width: 4,
          materialPolyline: new Cesium.PolylineDashMaterialProperty({
            color: Cesium.Color.CYAN
          }),
          id
        }
        return allEntities
    }
  }
}
