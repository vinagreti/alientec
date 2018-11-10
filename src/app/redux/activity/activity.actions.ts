import { Action } from '@ngrx/store';
import { DropPayload, ListPayload, DropResponse, ListResponse } from '../../models/payload';
import { Activity } from './../../models/activity';
import { Program } from './../../models/program';

export const DROP = 'DROP';

export enum ActivityActionTypes {
  LoadActivities = '[Activity] Load',
  LoadActivitiesError = '[Activity] Load Error',
  LoadActivitiesSuccess = '[Activity] Load Success',
  DropActivity = '[Activity] Drop',
  DropActivityError = '[Activity] Drop Error',
  DropActivitySuccess = '[Activity] Drop Success',
}

// LIST
export class LoadActivities implements ListPayload {
  readonly type = ActivityActionTypes.LoadActivities;
}

export class LoadActivitiesError implements ListResponse {
  readonly type = ActivityActionTypes.LoadActivitiesError;
}

export class LoadActivitiesSuccess implements ListResponse {
  readonly type = ActivityActionTypes.LoadActivitiesSuccess;
  constructor(readonly collection: any) {}
}

// DROP
export class DropActivity implements DropPayload {
  readonly type = ActivityActionTypes.DropActivity;
  constructor(readonly activity: Activity) {}
}

export class DropActivityError implements DropResponse {
  readonly type = ActivityActionTypes.DropActivityError;
}

export class DropActivitySuccess implements DropResponse {
  readonly type = ActivityActionTypes.DropActivitySuccess;
}

// PUBLIC
export type ActivityActions = LoadActivities
  | DropActivity
  | LoadActivitiesError
  | LoadActivitiesSuccess
  | DropActivityError
  | DropActivitySuccess;
