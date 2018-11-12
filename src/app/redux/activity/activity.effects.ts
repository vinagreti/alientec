import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActivityActionTypes,
  LoadActivities,
  DropActivitySuccess,
  DropActivityError,
  DropActivity,
  LoadActivitiesSuccess,
  LoadActivitiesError,
  AddActivity,
  AddActivitySuccess,
  AddActivityError,
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
      .list(data.payload)
      .pipe(
        map((res: any) => new LoadActivitiesSuccess(res, data)),
        catchError((err) => of(new LoadActivitiesError(err, data)))
      ))
  );

  @Effect()
  dropActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.DropActivity),
    switchMap((data: DropActivity) => {
      return this.activityService
        .delete(data.payload)
        .pipe(
          map((res: any) => new DropActivitySuccess(res, data)),
          catchError((err) => of(new DropActivityError(err, data)))
        );
    })
  );

  @Effect()
  addActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.AddActivity),
    switchMap((data: AddActivity) => this.activityService
      .add(data.payload)
      .pipe(
        map((res: any) => new AddActivitySuccess(res, data)),
        catchError((err) => of(new AddActivityError(err, data)))
      ))
  );

  constructor(
    private actions$: Actions,
    private activityService: ActivityService,
  ) { }

}
