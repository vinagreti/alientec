import { TestBed, getTestBed } from '@angular/core/testing';

import { ToladataApiService } from './toladata-api.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { ToladataApiServiceTestingModule } from '@app/services/toladata-api/toladata-api-service-testing.module';

describe('ToladataApiService', () => {

  let injector: TestBed;
  let service: ToladataApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToladataApiServiceTestingModule],
      providers: [ToladataApiService]
    });
    injector = getTestBed();
    service = injector.get(ToladataApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
