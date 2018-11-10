import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramsRoutingModule } from '@app/pages/programs/programs-routing.module';
import { ProgramListModule } from '@app/components/program/program-list/program-list.module';
import { StoreModule } from '@ngrx/store';

import { ProgramsComponent } from './programs.component';
import { EffectsModule } from '@ngrx/effects';

describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsComponent],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        ProgramsRoutingModule,
        ProgramListModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
