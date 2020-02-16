import { TestBed } from '@angular/core/testing';

import { TopdiskService } from './topdisk.service';

describe('TopdiskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopdiskService = TestBed.get(TopdiskService);
    expect(service).toBeTruthy();
  });
});
