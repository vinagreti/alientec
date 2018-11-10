import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProgramEffects } from './program.effects';
import { ProgramServiceTestingModule } from '@app/services/program/program-service-testing.module';

describe('ProgramEffects', () => {
  let actions$: Observable<any>;
  let effects: ProgramEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProgramEffects,
        provideMockActions(() => actions$),
      ],
      imports: [
        ProgramServiceTestingModule
      ]
    });

    effects = TestBed.get(ProgramEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
