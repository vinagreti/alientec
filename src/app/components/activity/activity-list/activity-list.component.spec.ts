import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityListComponent } from './activity-list.component';
import { ActivityListItemComponent } from '@app/components/activity/activity-list/activity-list-item/activity-list-item.component';
import { ActivityReduxTestingModule } from '@app/redux/activity/activity-redux-testing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { LoadingIndicatorModule } from '@app/components/loading-indicator/loading-indicator.module';
import { of } from 'rxjs';

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

  it('should show a loading gif while fetch the activities', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-loading-indicator');
    expect(loadingInidicator).toBeTruthy();
  });

  it('should hide loading gif after fetching the activities', () => {
    component.loading = false;
    component.activities$ = of([]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-loading-indicator');
    expect(loadingInidicator).toBeFalsy();
  });

  it('should render no activities message if none exists', () => {
    component.loading = false;
    component.activities$ = of([]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#empty-list').textContent).toContain('This program doesn\'t have any activity.');
  });

  it('should list activities', () => {
    component.loading = false;
    component.activities$ = of([{ id: 1, name: 'test', url: 'df', workflowlevel1: 'sdf' }]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-activity-list-item');
    expect(loadingInidicator).toBeTruthy();
  });
});
