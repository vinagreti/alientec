import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ConfirmServiceModule } from '@app/services/confirm/confirm-service.module';
import { MatSnackBarModule } from '@angular/material';
import { ActivityServiceTestingModule } from '@app/services/activity/activity-service-testing.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('activities', fromActivity.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ActivityEffects]),
    ConfirmServiceModule,
    MatSnackBarModule,
    ActivityServiceTestingModule,
  ]
})
export class ActivityReduxTestingModule { }
