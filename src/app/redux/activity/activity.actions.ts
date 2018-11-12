import { HttpReduxRequest, HttpReduxSuccess, HttpReduxError } from '@app/redux/actions..models';
import { Activity } from '@app/models/activity';
import { Action } from '@ngrx/store';

export enum ActivityActionTypes {
  LoadActivities = '[Activity] Load',
  LoadActivitiesError = '[Activity] Load Error',
  LoadActivitiesSuccess = '[Activity] Load Success',
  AddActivity = '[Activity] Add',
  AddActivityError = '[Activity] Add Error',
  AddActivitySuccess = '[Activity] Add Success',
  DropActivity = '[Activity] Drop',
  DropActivityError = '[Activity] Drop Error',
  DropActivitySuccess = '[Activity] Drop Success',
  DropActivityCancel = '[Activity] Drop Cancel',
}

// LIST
export class LoadActivities implements HttpReduxRequest<any> {
  readonly type = ActivityActionTypes.LoadActivities;
  constructor(readonly payload: any, readonly uid: string) { }
}

export class LoadActivitiesSuccess implements HttpReduxSuccess<LoadActivities> {
  readonly type = ActivityActionTypes.LoadActivitiesSuccess;
  constructor(readonly res: any, readonly data: LoadActivities) { }
}

export class LoadActivitiesError implements HttpReduxError<LoadActivities> {
  readonly type = ActivityActionTypes.LoadActivitiesError;
  constructor(readonly res: any, readonly data: LoadActivities) { }
}

// ADD
export class AddActivity implements HttpReduxRequest<Activity> {
  readonly type = ActivityActionTypes.AddActivity;
  constructor(readonly payload: Activity, readonly uid: string) { }
}

export class AddActivitySuccess implements HttpReduxSuccess<AddActivity> {
  readonly type = ActivityActionTypes.AddActivitySuccess;
  constructor(readonly res: any, readonly data: AddActivity) { }
}

export class AddActivityError implements HttpReduxError<AddActivity> {
  readonly type = ActivityActionTypes.AddActivityError;
  constructor(readonly res: any, readonly data: AddActivity) { }
}

// DROP
export class DropActivity implements HttpReduxRequest<Activity> {
  readonly type = ActivityActionTypes.DropActivity;
  constructor(readonly payload: Activity, readonly uid: string) { }
}

export class DropActivityCancel implements Action {
  readonly type = ActivityActionTypes.DropActivityCancel;
  constructor(readonly res: boolean, readonly data: DropActivity) { }
}

export class DropActivitySuccess implements HttpReduxSuccess<DropActivity> {
  readonly type = ActivityActionTypes.DropActivitySuccess;
  constructor(readonly res: any, readonly data: DropActivity) { }
}

export class DropActivityError implements HttpReduxError<DropActivity> {
  readonly type = ActivityActionTypes.DropActivityError;
  constructor(readonly res: any, readonly data: DropActivity) { }
}

// PUBLIC
export type ActivityActions = LoadActivities
  | LoadActivitiesError
  | LoadActivitiesSuccess
  | AddActivity
  | AddActivityError
  | AddActivitySuccess
  | DropActivity
  | DropActivityError
  | DropActivitySuccess
  | DropActivityCancel;
