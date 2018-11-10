import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmServiceComponent } from './confirm-service.component';
import { MatDialogModule } from '@angular/material';

describe('ConfirmServiceComponent', () => {
  let component: ConfirmServiceComponent;
  let fixture: ComponentFixture<ConfirmServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmServiceComponent],
      imports: [
        MatDialogModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
