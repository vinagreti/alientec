import { TestBed, getTestBed } from '@angular/core/testing';

import { ProgramService } from './program.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProgramService', () => {
  let injector: TestBed;
  let service: ProgramService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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
