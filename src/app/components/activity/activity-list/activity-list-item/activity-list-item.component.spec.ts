import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityListItemComponent } from './activity-list-item.component';
import { ActivityReduxTestingModule } from '@app/redux/activity/activity-redux-testing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';
import { ConfirmServiceModule } from '@app/services/confirm/confirm-service.module';

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
        ConfirmServiceModule,
        MatSnackBarModule,
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

  it('should render "waiting data" message if none exists', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#waiting-data').textContent).toContain('Waiting data.');
  });

  it('should render activity data', () => {
    component.activity = { id: 1, name: 'test', url: 'df', workflowlevel1: 'sdf' };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.activity-list-item-name').textContent).toBeTruthy();
  });
});
