import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListComponent } from './activity-list.component';
import { StoreModule } from '@ngrx/store';
import { ActivityEffects } from '@app/redux/activity/activity.effects';
import { EffectsModule } from '@ngrx/effects';
import { ActivityServiceModule } from '@app/services/activity/activity-service.module';
import * as fromActivity from '@app/redux/activity/activity.reducer';
import { ActivityListItemComponent } from '@app/components/activity/activity-list/activity-list-item/activity-list-item.component';

describe('ActivityListComponent', () => {
  let component: ActivityListComponent;
  let fixture: ComponentFixture<ActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityListComponent, ActivityListItemComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('activities', fromActivity.reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ActivityEffects]),
        ActivityServiceModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
