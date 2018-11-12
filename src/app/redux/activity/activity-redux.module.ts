import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';
import * as fromActivity from '@app/redux/activity/activity.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('activities', fromActivity.reducer),
    EffectsModule.forFeature([ActivityEffects]),
    ActivityServiceModule,
  ],
  exports: [
    StoreModule,
    EffectsModule,
  ]
})
export class ActivityReduxModule { }
