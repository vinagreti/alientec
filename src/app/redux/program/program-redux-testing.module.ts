import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramEffects } from '@app/redux/program/program.effects';
import * as fromProgram from '@app/redux/program/program.reducer';
import { ProgramServiceTestingModule } from '@app/services/program/program-service-testing.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('programs', fromProgram.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProgramEffects]),
    ProgramServiceTestingModule,
  ]
})
export class ProgramReduxTestingModule { }
