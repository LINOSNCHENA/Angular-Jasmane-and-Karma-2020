import { TestBed } from '@angular/core/testing';

import { ContactxService } from './contactx.service';

describe('ContactxService', () => {
  let service: ContactxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
