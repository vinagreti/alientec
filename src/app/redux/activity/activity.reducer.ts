import { ActivityActions, ActivityActionTypes } from './activity.actions';
import { Activity } from '../../models/activity';

export interface State {
  collection: Activity[];
}

export const initialState: State = {
  collection: []
};

export function reducer(state = initialState, action: ActivityActions): State {
  switch (action.type) {

    // LIST
    case ActivityActionTypes.LoadActivitiesSuccess:
      return {
        ...state,
        collection: [...action.res]
      };

    case ActivityActionTypes.DropActivity:
      return state;

    // ADD
    case ActivityActionTypes.AddActivitySuccess:
      return {
        ...state,
        collection: [...state.collection, action.res]
      };

    case ActivityActionTypes.AddActivityError:
      return state;

    // DELETE
    case ActivityActionTypes.DropActivitySuccess:
      return {
        ...state,
        collection: state.collection.filter(activity => activity.id !== action.data.payload.id)
      };

    case ActivityActionTypes.DropActivityError:
      return state;

    // DEFAULT
    default:
      return state;
  }
}
