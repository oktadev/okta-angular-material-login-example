import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Tic Tac Toe';
  public isAuthenticated = false;
  private _destroySub$ = new Subject<void>();

  constructor(private _authService: AuthService) { }

  public ngOnInit(): void {
    this._authService.isAuthenticated$.pipe(
      takeUntil(this._destroySub$)
    ).subscribe((isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated);
  }

  public ngOnDestroy(): void {
    this._destroySub$.next();
  }

  public logout(): void {
    this._authService.logout('/').pipe(take(1));
  }
}
