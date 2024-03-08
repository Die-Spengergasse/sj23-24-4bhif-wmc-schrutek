import { TestBed } from '@angular/core/testing';

import { MessageRepositoryService } from './message-repository.service';

describe('MessageRepositoryService', () => {
  let service: MessageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
