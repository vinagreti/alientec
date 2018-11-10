import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ActivityListItemComponent } from './activity-list-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';

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
