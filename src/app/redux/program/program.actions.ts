import { Action } from '@ngrx/store';
import { HttpReduxRequest, HttpReduxSuccess, HttpReduxError } from '@app/redux/actions..models';

export enum ProgramActionTypes {
  LoadPrograms = '[Program] Load',
  LoadProgramsSuccess = '[Program] Load Success',
  LoadProgramsError = '[Program] Load Error',
}

// LIST
export class LoadPrograms implements HttpReduxRequest<any> {
  readonly type = ProgramActionTypes.LoadPrograms;
  constructor(readonly payload: any, readonly uid: string) { }
}

export class LoadProgramsSuccess implements HttpReduxSuccess<LoadPrograms> {
  readonly type = ProgramActionTypes.LoadProgramsSuccess;
  constructor(readonly res: any, readonly data: LoadPrograms) { }
}

export class LoadProgramsError implements HttpReduxError<LoadPrograms> {
  readonly type = ProgramActionTypes.LoadProgramsError;
  constructor(readonly res: any, readonly data: LoadPrograms) { }
}


// PUBLIC
export type ProgramActions = LoadPrograms
  | LoadProgramsSuccess
  | LoadProgramsError;
