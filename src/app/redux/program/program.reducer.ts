import { ProgramActions, ProgramActionTypes } from './program.actions';
import { Program } from '../../models/program';

export interface State {
  collection: Program[];
}

export const initialState: State = {
  collection: undefined
};

export function reducer(state = initialState, action: ProgramActions): State {
  switch (action.type) {

    case ProgramActionTypes.LoadPrograms:
      return {
        ...state
      };

    case ProgramActionTypes.LoadProgramsSuccess:
      return {
        ...state,
        collection: [...action.res]
      };

    default:
      return state;
  }
}
