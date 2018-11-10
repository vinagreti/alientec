import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { ProgramEffects } from '@app/redux/program/program.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProgramServiceModule } from '@app/services/program/program-service.module';
import * as fromProgram from '@app/redux/program/program.reducer';

import { ProgramListItemComponent } from './program-list-item/program-list-item.component';
import { ProgramListComponent } from './program-list.component';
import { MatExpansionModule } from '@angular/material';
import { ActivityListModule } from '@app/components/activity/activity-list/activity-list.module';

describe('ProgramListComponent', () => {
  let component: ProgramListComponent;
  let fixture: ComponentFixture<ProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramListComponent, ProgramListItemComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('programs', fromProgram.reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProgramEffects]),
        ProgramServiceModule,
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
