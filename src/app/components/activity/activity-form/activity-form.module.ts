import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityFormComponent } from './activity-form.component';

import { ActivityEffects } from './../../../redux/activity/activity.effects';
import { StoreModule } from '@ngrx/store';
import * as fromActivity from './../../../redux/activity/activity.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [ActivityFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('activity', fromActivity.reducer),
    EffectsModule.forFeature([ActivityEffects])
  ],
  exports: [ActivityFormComponent]
})
export class ActivityFormModule { }
