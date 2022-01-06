import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('AuthGuardService', () => {
  let service: AuthGuard;
  let authSpy = jasmine.createSpyObj<AuthService>([], {
    isAuthenticated$: of(false)
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authSpy }
      ]
    });
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
