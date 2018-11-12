import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ActivityListComponent } from './activity-list.component';
import { ActivityListItemComponent } from './activity-list-item/activity-list-item.component';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { ActivityReduxModule } from '@app/redux/activity/activity-redux.module';
import { LoadingIndicatorModule } from '@app/components/loading-indicator/loading-indicator.module';
import { ActivityFormModule } from '@app/components/activity/activity-form/activity-form.module';
import { ConfirmServiceModule } from '@app/services/confirm/confirm-service.module';

@NgModule({
  declarations: [ActivityListComponent, ActivityListItemComponent],
  imports: [
    CommonModule,
    ActivityReduxModule,
    ActivityFormModule,
    FlexLayoutModule,
    MatButtonModule,
    LoadingIndicatorModule,
    ConfirmServiceModule,
    MatSnackBarModule,
  ],
  exports: [ActivityListComponent, ActivityListItemComponent]
})
export class ActivityListModule { }
