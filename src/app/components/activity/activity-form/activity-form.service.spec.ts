import { TestBed } from '@angular/core/testing';

import { ActivityFormService } from './activity-form.service';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ActivityFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
      BrowserAnimationsModule,
    ],
    providers: [
      { provide: MatDialog, useValue: {} },
    ]
  }));

  it('should be created', () => {
    const service: ActivityFormService = TestBed.get(ActivityFormService);
    expect(service).toBeTruthy();
  });
});
