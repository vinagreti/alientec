import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@app/environment';
import * as fromProgram from './program/program.reducer';
import * as fromActivity from './activity/activity.reducer';

export interface State {

  program: fromProgram.State;
  activity: fromActivity.State;
}

export const reducers: ActionReducerMap<State> = {

  program: fromProgram.reducer,
  activity: fromActivity.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
