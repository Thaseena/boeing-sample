import { TestBed, inject } from '@angular/core/testing';

import { BackendHeaderApiService } from './backend-header-api.service';

describe('BackendHeaderApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendHeaderApiService]
    });
  });

  it('should be created', inject([BackendHeaderApiService], (service: BackendHeaderApiService) => {
    expect(service).toBeTruthy();
  }));
});
