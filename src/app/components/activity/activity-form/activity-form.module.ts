import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityFormComponent } from './activity-form.component';

import { ActivityEffects } from './../../../redux/activity/activity.effects';
import { StoreModule } from '@ngrx/store';
import * as fromActivity from './../../../redux/activity/activity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActivityFormService } from '@app/components/activity/activity-form/activity-form.service';
import { MatDialogModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ActivityFormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('activity', fromActivity.reducer),
    EffectsModule.forFeature([ActivityEffects]),
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [ActivityFormComponent],
  entryComponents: [ActivityFormComponent],
  providers: [ActivityFormService]
})
export class ActivityFormModule { }
