import { Injectable }                      from '@angular/core';
import { HttpClient }                      from '@angular/common/http';
import { Observable, of, throwError }      from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import includes                            from 'lodash/includes';

interface User {
  login: string;
  password: string;
}

function isInDb(users: User[], curUser: User): boolean {
  return !!users.find(user => (user.login === curUser.login) && (user.password === curUser.password));
}

@Injectable({providedIn: 'root'})
export class AuthService {

  get token(): string { return localStorage.getItem('token'); }
  set token(token: string) { localStorage.setItem('token', token); }

  get isLoggedIn(): boolean { return !!this.token; }

  constructor(
    private http: HttpClient
  ) {
  }

  postUser(user: User): Observable<any> {
    return this.http.post('users', user);
  }

  login(loginUser: User): Observable<any> {
    return this.http.get<User[]>('users').pipe(
      switchMap(users => isInDb(users, loginUser) ? of('token') : throwError({message: 'Нет пользователя'})),
      tap(token => this.token = token)
    );
  }

  isValidToken(token: string): Observable<boolean> {
    return this.http.get('validTokens').pipe(
      map(validTokens => includes(validTokens, token)),
      catchError(() => of(false))
    );
  }
}
