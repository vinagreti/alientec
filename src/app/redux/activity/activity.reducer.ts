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
    case ActivityActionTypes.LoadActivities:
      return state;

    case ActivityActionTypes.LoadActivitiesSuccess:
      return {
        ...state,
        collection: [...action.collection]
      };

    case ActivityActionTypes.DropActivity:
      return state;

    // DELETE
    case ActivityActionTypes.DropActivitySuccess:
      return {
        ...state,
        collection: state.collection.filter(activity => activity.id !== action.data.activity.id)
      };

    case ActivityActionTypes.DropActivityError:
      return state;

    // DEFAULT
    default:
      return state;
  }
}
