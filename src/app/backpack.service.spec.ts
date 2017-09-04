import { TestBed, inject } from '@angular/core/testing';

import { BackpackService } from './backpack.service';

describe('BackpackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackpackService]
    });
  });

  it('should be created', inject([BackpackService], (service: BackpackService) => {
    expect(service).toBeTruthy();
  }));
});
