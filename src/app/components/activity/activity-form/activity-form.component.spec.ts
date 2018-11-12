import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFormComponent } from './activity-form.component';
import { ActivityReduxTestingModule } from '@app/redux/activity/activity-redux-testing.module';
import { MatDialogModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatDialog, MatDialogRef, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule } from '@app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ActivityFormComponent', () => {
  let component: ActivityFormComponent;
  let fixture: ComponentFixture<ActivityFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityFormComponent],
      imports: [
        ActivityReduxTestingModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        CoreModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: (res: any) => { } } },
        { provide: MatDialog, useValue: {} },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
