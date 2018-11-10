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
import { sortById } from '@app/helpers/array-helpers/array-helpers';
import { ConfirmService } from '@app/services/confirm/confirm.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ActivityEffects {

  @Effect()
  loadActivities$ = this.actions$.pipe(
    ofType(ActivityActionTypes.LoadActivities),
    switchMap((data: LoadActivities) => this.activityService
      .list(data.filter)
      .pipe(
        map((res: any) => new LoadActivitiesSuccess(sortById(res))),
        catchError(() => of(new LoadActivitiesError()))
      ))
  );

  @Effect()
  dropActivity$ = this.actions$.pipe(
    ofType(ActivityActionTypes.DropActivity),
    switchMap(stream => this.confirmBeforeDrop(stream))
  );

  constructor(
    private actions$: Actions,
    private activityService: ActivityService,
    private confirmService: ConfirmService,
    private snack: MatSnackBar,
  ) { }

  private confirmBeforeDrop(data: DropActivity) {
    return this.confirmService.confirm(`Would you like to delete the activity ${data.activity.name}?`).pipe(
      switchMap((confirmed: boolean) => {
        if (confirmed) {
          return this.dropActivity(data);
        } else {
          return of();
        }
      })
    );
  }

  private dropActivity(data) {
    return this.activityService
      .delete(data.activity)
      .pipe(
        map(() => {
          this.informRemotion(data.activity.name);
          return new DropActivitySuccess(data);
        }),
        catchError(() => of(new DropActivityError()))
      );
  }

  private informRemotion(id: string) {
    this.snack.open(`Activity ${id} removed!`, 'Close');
  }
}
