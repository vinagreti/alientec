import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramListItemComponent } from './program-list-item/program-list-item.component';
import { ProgramListComponent } from './program-list.component';
import { MatExpansionModule } from '@angular/material';
import { ActivityListModule } from '@app/components/activity/activity-list/activity-list.module';
import { ProgramReduxTestingModule } from '@app/redux/program/program-redux-testing.module';

describe('ProgramListComponent', () => {
  let component: ProgramListComponent;
  let fixture: ComponentFixture<ProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramListComponent, ProgramListItemComponent],
      imports: [
        ProgramReduxTestingModule,
        MatExpansionModule,
        ActivityListModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
