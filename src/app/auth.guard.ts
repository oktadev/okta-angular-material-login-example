import { Injectable } from '@angular/core';
import { Router, CanActivate, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) {}

  public canActivate(): Observable<boolean | UrlTree> {
    return this._authService.isAuthenticated$
      .pipe(
        map((s: boolean) => s ? true: this._router.parseUrl('/login'))
      );
  }
}
