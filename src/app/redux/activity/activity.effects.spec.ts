import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ActivityEffects } from './activity.effects';
import { ActivityServiceTestingModule } from '@app/services/activity/activity-service-testing.module';

describe('ActivityEffects', () => {
  let actions$: Observable<any>;
  let effects: ActivityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivityEffects,
        provideMockActions(() => actions$),
      ],
      imports: [
        ActivityServiceTestingModule
      ]
    });

    effects = TestBed.get(ActivityEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
