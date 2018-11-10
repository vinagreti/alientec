import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramEffects } from '@app/redux/program/program.effects';
import { ProgramServiceModule } from '@app/services/program/program-service.module';
import * as fromProgram from '@app/redux/program/program.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('programs', fromProgram.reducer),
    EffectsModule.forFeature([ProgramEffects]),
    ProgramServiceModule,
  ],
  exports: [
    StoreModule,
    EffectsModule,
  ]
})
export class ProgramReduxModule { }
