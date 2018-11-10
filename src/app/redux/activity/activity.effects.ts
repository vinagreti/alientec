import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActivityActionTypes,
  LoadActivities,
  DropActivitySuccess,
  DropActivityError,
  DropActivity,
  LoadActivitiesSuccess,
  LoadActivitiesError
} from './activity.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ActivityService } from './../../services/activity/activity.service';
import { of } from 'rxjs';

@Injectable()
export class ActivityEffects {

  @Effect()
  loadActivities$ = this.actions$.pipe(
    ofType(ActivityActionTypes.LoadActivities),
    switchMap((data: LoadActivities) => this.activityService
      .list()
      .pipe(
        map((res: any) => new LoadActivitiesSuccess(res.data)),
        catchError(() => of(new LoadActivitiesError()))
      ))
  );

  @Effect()
  dropActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.DropActivity),
    switchMap((data: DropActivity) => this.activityService
      .drop(data)
      .pipe(
        map((activity: any) => new DropActivitySuccess()),
        catchError(() => of(new DropActivityError()))
      ))
  );

  constructor(
    private actions$: Actions,
    private activityService: ActivityService,
  ) { }
}
