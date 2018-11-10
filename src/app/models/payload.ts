import { Action } from '@ngrx/store';

// ERROR_HANDLING
class RequestError implements Action {
  readonly type: string;
  constructor(readonly error?: any) { }
}

// LISTING
export class ListPayload implements Action {
  readonly type: string;
  constructor() { }
}

export class ListResponse implements Action {
  readonly type: string;
  constructor(readonly collection?: any) { }
}

export class ListError implements Action {
  readonly type: string;
  constructor(readonly error?: any) { }
}

// DROP
export class DropPayload implements RequestError {
  readonly type: string;
  constructor(readonly payload?: any) { }
}

export class DropResponse implements Action {
  readonly type: string;
  constructor(data: DropPayload) { }
}

export class DropError implements Action {
  readonly type: string;
  constructor(readonly error?: any) { }
}
