import { Action } from '@ngrx/store';
import { IMapEntity } from '../interfaces/map.interfaces';
import { AcNotification } from 'angular-cesium';

export enum MapActionTypes {
  TEST = 'TEST',
  LOAD = 'LOAD',
  DELETE = 'DELETE',
  SHOW_POINTS = 'SHOW_POINTS'
}


export type MapActions
  = TestAction
  | LoadAction
  | DeleteAction
  | ShowPointsAction
  ;


export class TestAction implements Action {
  type: string = MapActionTypes.TEST;

  /**
   *
   * @param {string} payload change name
   */
  constructor(public payload: string) {
  }
}


export class LoadAction implements Action {
  type: string = MapActionTypes.LOAD;

  /**
   *
   * @param {string} load entities data
   */

  constructor(public payload: AcNotification[]) {
  }
}


export class DeleteAction implements Action {
  type: string = MapActionTypes.DELETE;

  /**
   *
   * @param {string} delete entities data
   */

  constructor() {
  }
}

export class ShowPointsAction implements Action {
  type: string = MapActionTypes.SHOW_POINTS
  /**
   *
   * @param {string} toggle hide/display points
   */

  constructor(public payload: Boolean){
  }
}

