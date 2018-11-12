import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramListItemComponent } from './program-list-item.component';
import * as Actions from '@app/redux/program/program.actions';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { ActivityListModule } from '@app/components/activity/activity-list/activity-list.module';
import { ProgramReduxTestingModule } from '@app/redux/program/program-redux-testing.module';

describe('ProgramListItemComponent', () => {
  let component: ProgramListItemComponent;
  let fixture: ComponentFixture<ProgramListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramListItemComponent],
      imports: [
        ProgramReduxTestingModule,
        ActivityListModule,
      ],
      providers: [
        provideMockActions(of(Actions)),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramListItemComponent);
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

  it('should render program data', () => {
    component.program = { id: 1, name: 'test', url: 'df' };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-activity-list').textContent).toBeTruthy();
  });
});
