import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramListItemComponent } from './program-list-item/program-list-item.component';
import { ProgramListComponent } from './program-list.component';
import { MatExpansionModule } from '@angular/material';
import { ActivityListModule } from '@app/components/activity/activity-list/activity-list.module';
import { ProgramReduxTestingModule } from '@app/redux/program/program-redux-testing.module';
import { LoadingIndicatorModule } from '@app/components/loading-indicator/loading-indicator.module';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
        LoadingIndicatorModule,
        NoopAnimationsModule,
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

  it('should show a loading gif while fetch the programs', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-loading-indicator');
    expect(loadingInidicator).toBeTruthy();
  });

  it('should hide loading gif after fetching the programs', () => {
    component.loading = false;
    component.programs$ = of([]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-loading-indicator');
    expect(loadingInidicator).toBeFalsy();
  });

  it('should render no programs message if none exists', () => {
    component.loading = false;
    component.programs$ = of([]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#empty-list').textContent).toContain('There is no problem available.');
  });

  it('should list programs', () => {
    component.loading = false;
    component.programs$ = of([{ id: 1, name: 'test', url: 'df' }]);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('mat-expansion-panel');
    expect(loadingInidicator).toBeTruthy();
  });

});
