import { TestBed } from '@angular/core/testing';

import { TopMemoryService } from './top-memory.service';

describe('TopMemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopMemoryService = TestBed.get(TopMemoryService);
    expect(service).toBeTruthy();
  });
});
