import { NgModule } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';

@NgModule({
  exports: [
    HttpClientTestingModule,
    ActivityServiceModule,
  ]
})
export class ActivityServiceTestingModule { }
