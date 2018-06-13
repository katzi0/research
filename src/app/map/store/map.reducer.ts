import { mapInitState } from './map.initState';
import { MapActions, MapActionTypes } from './map.actions';
import { IMapState } from '../interfaces/map.interfaces';

export function MapReducer(state = mapInitState, action: MapActions | any): IMapState {
  switch (action.type) {
    case MapActionTypes.LOAD:
      const newEntities = action.payload;
      return {
        entities: newEntities
      };
    case MapActionTypes.DELETE:
         const deletedEntities = [];
          const entities = state.entities;
         entities.forEach(entity => deletedEntities.push(entity));
         deletedEntities.forEach(entity => entity[0].actionType = 1);
      return{
        entities: deletedEntities
      };
    default:
      return state;
  }
}
