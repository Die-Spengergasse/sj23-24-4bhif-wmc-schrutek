import { TestBed } from '@angular/core/testing';

import { StudentsRepositoryService } from './student-repository.service';

describe('StudentRepositoryService', () => {
  let service: StudentsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
