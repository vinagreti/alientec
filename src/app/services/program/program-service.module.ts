import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramService } from './program.service';
import { ToladataApiModule } from '@app/services/toladata-api/toladata-api.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToladataApiModule,
  ],
  providers: [
    ProgramService
  ]
})
export class ProgramServiceModule { }
