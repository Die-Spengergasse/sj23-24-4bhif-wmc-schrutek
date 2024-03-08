import { TestBed } from '@angular/core/testing';

import { ClassroomRepositoryService } from './classroom-repository.service';

describe('ClassroomRepositoryService', () => {
  let service: ClassroomRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
