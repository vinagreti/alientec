import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramService } from './program.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ProgramService,
  ]
})
export class ProgramServiceModule { }
