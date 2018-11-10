import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';

import { ActivityListComponent } from './activity-list.component';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';

@NgModule({
  declarations: [ActivityListComponent, ActivityListItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('activities', fromActivity.reducer),
    EffectsModule.forFeature([ActivityEffects]),
    ActivityServiceModule,
  ],
  exports: [ActivityListComponent, ActivityListItemComponent]
})
export class ActivityListModule { }
