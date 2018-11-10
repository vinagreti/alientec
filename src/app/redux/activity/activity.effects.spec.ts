import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MatSnackBarModule } from '@angular/material';
import { Observable, of } from 'rxjs';
import { ConfirmServiceModule } from '@app/services/confirm/confirm-service.module';
import { ActivityServiceTestingModule } from '@app/services/activity/activity-service-testing.module';
import { ActivityEffects } from './activity.effects';

describe('ActivityEffects', () => {
  const actions$: Observable<any> = of();
  let effects: ActivityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivityEffects,
        provideMockActions(() => actions$),
      ],
      imports: [
        ActivityServiceTestingModule,
        ConfirmServiceModule,
        MatSnackBarModule,
      ]
    });

    effects = TestBed.get(ActivityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
