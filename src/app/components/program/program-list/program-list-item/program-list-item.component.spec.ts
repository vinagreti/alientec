import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as fromProgram from '@app/redux/program/program.reducer';

import { ProgramListItemComponent } from './program-list-item.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProgramEffects } from '@app/redux/program/program.effects';
import * as Actions from '@app/redux/program/program.actions';
import { ProgramServiceModule } from '@app/services/program/program-service.module';
import { provideMockActions } from '@ngrx/effects/testing';
import { of } from 'rxjs';
import { ActivityListModule } from '@app/components/activity/activity-list/activity-list.module';

describe('ProgramListItemComponent', () => {
  let component: ProgramListItemComponent;
  let fixture: ComponentFixture<ProgramListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramListItemComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('programs', fromProgram.reducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([ProgramEffects]),
        ProgramServiceModule,
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
});
