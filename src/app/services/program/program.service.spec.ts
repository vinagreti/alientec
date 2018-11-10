import { TestBed, getTestBed } from '@angular/core/testing';

import { ProgramService } from './program.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { ToladataApiServiceTestingModule } from '@app/services/toladata-api/toladata-api-service-testing.module';

describe('ProgramService', () => {
  let injector: TestBed;
  let service: ProgramService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToladataApiServiceTestingModule],
      providers: [ProgramService]
    });
    injector = getTestBed();
    service = injector.get(ProgramService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
