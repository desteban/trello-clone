import { inject, Injectable } from '@angular/core';
import { LocalStorage } from '../LocalStorage/local-storage';
import { Observable, of, throwError } from 'rxjs';
import { mockUsers, User } from '@app/models/User';
import { Router } from '@angular/router';

export interface LoginProps {
  user: string;
  password: string;
}

export interface Tokens {
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private key: string = 'tk-trello';
  private lsService: LocalStorage = inject(LocalStorage);
  private _accessToken: string | null = null;
  private router: Router = inject(Router);
  private _session: User | null = null;

  constructor() {
    const token = this.lsService.find(this.key);
    if (token !== null) {
      this._accessToken = token;
    }
  }

  get accessToken() {
    return this._accessToken;
  }

  public login(props: LoginProps): Observable<boolean> {
    const token: Tokens = { accessToken: this.generateToken() };
    this.lsService.setItem(this.key, token.accessToken);
    this.router.navigate(['/boards']);
    return of(true);
  }

  public logout() {
    this._accessToken = null;
    this.lsService.delete(this.key);
    this.router.navigate(['/']);
  }

  public profile(): Observable<User> {
    if (this._accessToken === null) {
      return throwError(() => new Error('Login'));
    }

    return of(mockUsers[0]);
  }

  public get isAuthenticated(): boolean {
    return this._accessToken !== null;
  }

  private generateToken(): string {
    const marcaDeTiempo = Date.now().toString(36);
    const parteAleatoria = Math.random().toString(36).substring(2, 8);
    return `${marcaDeTiempo}-${parteAleatoria}`;
  }
}
