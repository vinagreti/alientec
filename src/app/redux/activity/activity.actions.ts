import { DropPayload, ListPayload, DropResponse, ListResponse, ListError, DropError } from '../../models/payload';
import { Activity } from './../../models/activity';
import { Action } from '@ngrx/store';

export enum ActivityActionTypes {
  LoadActivities = '[Activity] Load',
  LoadActivitiesError = '[Activity] Load Error',
  LoadActivitiesSuccess = '[Activity] Load Success',
  DropActivity = '[Activity] Drop',
  DropActivityCanceled = '[Activity] Drop Canceled',
  DropActivityError = '[Activity] Drop Error',
  DropActivitySuccess = '[Activity] Drop Success',
}

// LIST
export class LoadActivities implements ListPayload {
  readonly type = ActivityActionTypes.LoadActivities;
  constructor(readonly filter?: any) { }
}

export class LoadActivitiesSuccess implements ListResponse {
  readonly type = ActivityActionTypes.LoadActivitiesSuccess;
  constructor(readonly collection: Activity[]) { }
}

export class LoadActivitiesError implements ListError {
  readonly type = ActivityActionTypes.LoadActivitiesError;
}

// DROP
export class DropActivity implements DropPayload {
  readonly type = ActivityActionTypes.DropActivity;
  constructor(readonly activity: Activity) { }
}

export class DropActivitySuccess implements DropResponse {
  readonly type = ActivityActionTypes.DropActivitySuccess;
  constructor(readonly data: DropActivity) { }
}

export class DropActivityError implements DropError {
  readonly type = ActivityActionTypes.DropActivityError;
}

// PUBLIC
export type ActivityActions = LoadActivities
  | DropActivity
  | LoadActivitiesError
  | LoadActivitiesSuccess
  | DropActivityError
  | DropActivitySuccess;
