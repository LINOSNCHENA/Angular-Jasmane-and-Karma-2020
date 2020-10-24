import { TestBed } from '@angular/core/testing';

import { UserServicex } from './user.service';

describe('UserService', () => {
  let service: UserServicex;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServicex);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
