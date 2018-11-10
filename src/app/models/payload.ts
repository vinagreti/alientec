import { Action } from '@ngrx/store';
import { Activity } from './activity';

export class ListPayload implements Action {
  readonly type: string;
  constructor() { }
}

export class ListResponse implements Action {
  type: string;
  constructor(public activity?: Activity) { }
}

export class DropPayload implements Action {
  type: string;
  constructor(activity: Activity) { }
}

export class DropResponse implements Action {
  type: string;
  constructor(activity: Activity, error: any) { }
}
