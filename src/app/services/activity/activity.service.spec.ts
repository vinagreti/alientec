import { TestBed, getTestBed } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import { ToladataApiServiceTestingModule } from '@app/services/toladata-api/toladata-api-service-testing.module';
import { HttpTestingController } from '@angular/common/http/testing';

describe('ActivityService', () => {
  let injector: TestBed;
  let service: ActivityService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToladataApiServiceTestingModule],
      providers: [ActivityService]
    });
    injector = getTestBed();
    service = injector.get(ActivityService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
