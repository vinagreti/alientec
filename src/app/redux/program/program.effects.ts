import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProgramActionTypes, LoadProgramsSuccess, LoadProgramsError, LoadPrograms } from './program.actions';
import { ProgramService } from './../../services/program/program.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProgramEffects {

  @Effect()
  loadPrograms$ = this.actions$.pipe(
    ofType(ProgramActionTypes.LoadPrograms),
    switchMap((data: LoadPrograms) => this.programService
      .list()
      .pipe(
        map((res: any) => new LoadProgramsSuccess(res)),
        catchError(() => of(new LoadProgramsError()))
      ))
  );

  constructor(
    private actions$: Actions,
    private programService: ProgramService,
  ) { }
}
