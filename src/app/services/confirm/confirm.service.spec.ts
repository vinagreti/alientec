import { TestBed } from '@angular/core/testing';

import { ConfirmService } from './confirm.service';
import { MatDialogModule } from '@angular/material';

describe('ConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
    ]
  }));

  it('should be created', () => {
    const service: ConfirmService = TestBed.get(ConfirmService);
    expect(service).toBeTruthy();
  });
});
