import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ActivityListComponent } from './activity-list.component';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';
import { MatButtonModule } from '@angular/material';
import { ActivityReduxModule } from '@app/redux/activity/activity-redux.module';
import { LoadingIndicatorModule } from '@app/components/loading-indicator/loading-indicator.module';

@NgModule({
  declarations: [ActivityListComponent, ActivityListItemComponent],
  imports: [
    CommonModule,
    ActivityReduxModule,
    FlexLayoutModule,
    MatButtonModule,
    LoadingIndicatorModule,
  ],
  exports: [ActivityListComponent, ActivityListItemComponent]
})
export class ActivityListModule { }
