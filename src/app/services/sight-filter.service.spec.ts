import { TestBed, inject } from '@angular/core/testing';

import { SightFilterService } from './sight-filter.service';

describe('SightFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SightFilterService]
    });
  });

  it('should be created', inject([SightFilterService], (service: SightFilterService) => {
    expect(service).toBeTruthy();
  }));
});
