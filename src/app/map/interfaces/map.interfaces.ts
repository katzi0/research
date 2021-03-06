import { AcEntity, AcNotification, Cartesian3 } from 'angular-cesium';

export interface IMapState {
  entities: AcNotification[];
  showPoints: Boolean;
}

export interface IMapEntity extends AcEntity {
  name: string;
  billboard: IBillboard;
}


export interface IBillboard {
  image: string;
  position: Cartesian3;
}
