import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService } from './activity.service';
import { ToladataApiModule } from '@app/services/toladata-api/toladata-api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToladataApiModule,
  ],
  providers: [
    ActivityService,
  ]
})
export class ActivityServiceModule { }
