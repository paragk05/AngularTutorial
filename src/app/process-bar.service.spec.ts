import { TestBed } from '@angular/core/testing';

import { ProcessBarService } from './process-bar.service';

describe('ProcessBarService', () => {
  let service: ProcessBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
