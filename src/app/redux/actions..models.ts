import { Action } from '@ngrx/store';

export class HttpReduxRequest<T> implements Action {
  readonly type: string;
  constructor(readonly payload: T, readonly uid: string) { }
}

export class HttpReduxSuccess<T> implements Action {
  readonly type: string;
  constructor(readonly res: any, readonly data: T) { }
}

export class HttpReduxError<T> implements Action {
  readonly type: string;
  constructor(readonly res: any, readonly data: T) { }
}
