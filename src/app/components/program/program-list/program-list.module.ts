import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramListComponent } from './program-list.component';
import { ProgramListItemComponent } from './program-list-item/program-list-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromProgram from './../../../redux/program/program.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProgramEffects } from './../../../redux/program/program.effects';
import { ActivityListModule } from './../../activity/activity-list/activity-list.module';
import { ProgramServiceModule } from '@app/services/program/program-service.module';
import { MatExpansionModule } from '@angular/material';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [ProgramListComponent, ProgramListItemComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('programs', fromProgram.reducer),
    EffectsModule.forFeature([ProgramEffects]),
    ActivityListModule,
    ProgramServiceModule,
    MatExpansionModule
  ],
  exports: [ProgramListComponent, ProgramListItemComponent]
})
export class ProgramListModule { }
