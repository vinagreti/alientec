import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListComponent } from './activity-list.component';
import { ActivityListItemComponent } from '@app/components/activity/activity-list/activity-list-item/activity-list-item.component';
import { ActivityReduxTestingModule } from '@app/redux/activity/activity-redux-testing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { LoadingIndicatorModule } from '@app/components/loading-indicator/loading-indicator.module';

describe('ActivityListComponent', () => {
  let component: ActivityListComponent;
  let fixture: ComponentFixture<ActivityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityListComponent, ActivityListItemComponent],
      imports: [
        ActivityReduxTestingModule,
        FlexLayoutModule,
        MatButtonModule,
        LoadingIndicatorModule,
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
