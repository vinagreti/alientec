import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { LoadingIndicatorModule } from '@app/components/loading-indicator/loading-indicator.module';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        LoadingIndicatorModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('⊶ Alientec');
  });

  it('should show a loading gif while loading the route', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-loading-indicator');
    expect(loadingInidicator).toBeTruthy();
  });

  it('should hide loading gif after route activation', () => {
    component.loading = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const loadingInidicator = compiled.querySelector('app-loading-indicator');
    expect(loadingInidicator).toBeFalsy();
  });

});
