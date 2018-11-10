import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './program-list.component';
import { ProgramListItemComponent } from './program-list-item/program-list-item.component';
import { ActivityListModule } from './../../activity/activity-list/activity-list.module';
import { MatExpansionModule } from '@angular/material';
import { ProgramReduxModule } from '@app/redux/program/program-redux.module';

@NgModule({
  declarations: [ProgramListComponent, ProgramListItemComponent],
  imports: [
    CommonModule,
    ProgramReduxModule,
    ActivityListModule,
    MatExpansionModule
  ],
  exports: [ProgramListComponent, ProgramListItemComponent]
})
export class ProgramListModule { }
