import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ProgramEffects } from './program.effects';
import { ProgramServiceTestingModule } from '@app/services/program/program-service-testing.module';

describe('ProgramEffects', () => {
  const actions$: Observable<any> = of();
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
