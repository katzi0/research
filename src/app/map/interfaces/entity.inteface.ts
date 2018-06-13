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

  distanceDisplayCondition?: any;
}

export interface IPoint extends IEntity {
  pointPosition: any;
  pixelSize: number;
  color: any;
}

export interface IBillboard extends IEntity {
  bbPosition: any;
  image: any;
}

export interface MiskEntity {
  [key: string]: IEntity;
}
