import { mapInitState } from './map.initState';
import { MapActions, MapActionTypes } from './map.actions';
import { IMapState } from '../interfaces/map.interfaces';

export function MapReducer(state = mapInitState, action: MapActions | any): IMapState {
  switch (action.type) {
    case MapActionTypes.LOAD:
      const newEntities = action.payload;
      return {
        entities: newEntities,
        showPoints: true
      };
    case MapActionTypes.DELETE:
      const deletedEntities = [];
      const entities = state.entities;
      entities.forEach(entity => deletedEntities.push(entity));
      deletedEntities.forEach(entity => entity.actionType = 1);
      return {
        entities: deletedEntities,
        showPoints: false
      };

    case MapActionTypes.SHOW_POINTS:
      const showPoints = action.payload;
      return {
        entities: state.entities,
        showPoints
      }

    default:
      return state;
  }
}
