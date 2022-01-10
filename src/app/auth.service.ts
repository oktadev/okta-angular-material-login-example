import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, from, map, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthTransaction, OktaAuth } from '@okta/okta-auth-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private _authSub$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get isAuthenticated$(): Observable<boolean> {
    return this._authSub$.asObservable();
  }

  constructor(private _router: Router, private _authClient: OktaAuth) {
    this._authClient.session.exists().then(exists => this._authSub$.next(exists));
  }

  public ngOnDestroy(): void {
    this._authSub$.next(false);
    this._authSub$.complete();
  }

  public login(username: string, password: string): Observable<void> {
    return from(this._authClient.signInWithCredentials({username, password})).pipe(
      map((t: AuthTransaction) => this.handleSignInResponse(t))
    );
  }

  public logout(redirect: string): Observable<void> {
    return from(this._authClient.signOut()).pipe(
      tap( _ => (this._authSub$.next(false), this._router.navigate([redirect]))),
      catchError(err => {
        console.error(err);
        throw new Error('Unable to sign out');
      })
    )
  }

  private handleSignInResponse(transaction: AuthTransaction): void {
    if (transaction.status !== 'SUCCESS') {
      throw new Error(`We cannot handle the ${transaction.status} status`);
    }

    this._authSub$.next(true)
    this._authClient.session.setCookieAndRedirect(transaction.sessionToken);
  }
}
