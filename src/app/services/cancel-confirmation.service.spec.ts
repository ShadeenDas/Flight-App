import { TestBed } from '@angular/core/testing';

import { CancelConfirmationService } from './cancel-confirmation.service';

describe('CancelConfirmationService', () => {
  let service: CancelConfirmationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CancelConfirmationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
