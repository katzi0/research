export enum EntityEnum {
  point = 'point',
  polygon = 'polygon',
  polyline = 'polyline',
  billboard = 'billboard',
  misc = 'misc'
}


export interface IEntity {
  name?: EntityEnum;

  [key: string]: any

  // distanceDisplayCondition?: any;
}

export interface IPoint extends IEntity {
  pointPosition: any;
  pixelSize: number;
  color: any;
  distanceDisplayConditionPoint: any;
}

export interface IBillboard extends IEntity {
  bbPosition: any;
  image: any;
  distanceDisplayConditionBb: any;
}

export interface IPolygon extends IEntity {
  hierarchy: any;
  extrudedHeight: number;
  materialPolygon: any;
  closeTop: boolean;
  closeBottom: boolean;
}

export interface IPolyline extends IEntity {
  positions: any;
  width: number;
  materialPolyline: any;
}

export interface MiscEntity {
  [key: string]: IEntity;
}

export interface IAllEntity extends IBillboard, IPoint, IPolygon, IPolyline {
  
}

export enum EntitesType {
  SIMULATED_ENTITIES,
  ALL
}

export const IconsArr = [
  'assets/icons/plane.svg',
  'assets/icons/car-black-side-silhouette.svg',
  'assets/icons/delivery-truck.svg',
  'assets/icons/fighter-jet.png'
];
