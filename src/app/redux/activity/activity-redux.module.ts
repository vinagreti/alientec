import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ConfirmServiceModule } from '@app/services/confirm/confirm-service.module';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    StoreModule.forFeature('activities', fromActivity.reducer),
    EffectsModule.forFeature([ActivityEffects]),
    ActivityServiceModule,
    ConfirmServiceModule,
    MatSnackBarModule,
  ],
  exports: [
    StoreModule,
    EffectsModule,
  ]
})
export class ActivityReduxModule { }
