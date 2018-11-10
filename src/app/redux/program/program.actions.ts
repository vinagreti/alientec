import { Action } from '@ngrx/store';
import { ListPayload } from '../../models/payload';

export enum ProgramActionTypes {
  LoadPrograms = '[Program] Load',
  LoadProgramsSuccess = '[Program] Load Success',
  LoadProgramsError = '[Program] Load Error',
}

// LIST
export class LoadPrograms implements ListPayload {
  readonly type = ProgramActionTypes.LoadPrograms;
}

export class LoadProgramsSuccess implements Action {
  readonly type = ProgramActionTypes.LoadProgramsSuccess;
  constructor(readonly collection: any) {}
}

export class LoadProgramsError implements Action {
  readonly type = ProgramActionTypes.LoadProgramsError;
}


// PUBLIC
export type ProgramActions = LoadPrograms | LoadProgramsSuccess | LoadProgramsError;
