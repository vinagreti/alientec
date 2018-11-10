import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ActivityListItemComponent } from './activity-list-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';
import { ActivityReduxTestingModule } from '@app/redux/activity/activity-redux-testing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

describe('ActivityListItemComponent', () => {
  let component: ActivityListItemComponent;
  let fixture: ComponentFixture<ActivityListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityListItemComponent],
      imports: [
        ActivityReduxTestingModule,
        FlexLayoutModule,
        MatButtonModule,
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
