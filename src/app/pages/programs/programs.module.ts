import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramsComponent } from './programs.component';
import { ProgramListModule } from '@app/components/program/program-list/program-list.module';

@NgModule({
  declarations: [ProgramsComponent],
  imports: [
    CommonModule,
    ProgramsRoutingModule,
    ProgramListModule,
  ]
})
export class ProgramsModule { }
