import { TestBed } from '@angular/core/testing';

import { ToladataApiInterceptorService } from './toladata-api-interceptor.service';

describe('ToladataApiInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToladataApiInterceptorService = TestBed.get(ToladataApiInterceptorService);
    expect(service).toBeTruthy();
  });
});
