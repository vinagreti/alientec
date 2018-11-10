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

    case ActivityActionTypes.LoadActivities:
      return { ...state };

    case ActivityActionTypes.LoadActivitiesSuccess:
      return {
        ...state,
        collection: [...action.collection]
      };

    case ActivityActionTypes.DropActivity:
      return { ...state };

    default:
      return state;
  }
}
