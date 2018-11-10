import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromActivity from '@app/redux/activity/activity.reducer';

import { ActivityListItemComponent } from './activity-list-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import * as Actions from '@app/redux/activity/activity.actions';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';

describe('ActivityListItemComponent', () => {
  let component: ActivityListItemComponent;
  let fixture: ComponentFixture<ActivityListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityListItemComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('activities', fromActivity.reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ActivityEffects]),
        ActivityServiceModule,
      ],
      providers: [
        provideMockActions(of(Actions)),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
