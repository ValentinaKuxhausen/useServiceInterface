import { TestBed } from '@angular/core/testing';

import { CommonConditionService } from './common-condition.service';

describe('CommonConditionService', () => {
  let service: CommonConditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonConditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
