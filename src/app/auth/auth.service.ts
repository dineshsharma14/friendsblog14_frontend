import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';
import { LoginPayload } from './login-payload';
import { JwtAuthResponse } from './jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;

  public _url: string = this.baseUrl + "api/auth/";

  constructor(public _httpClient: HttpClient,
    public _localStorageService: LocalStorageService) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this._httpClient.post(this._url + "signup", registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {
    return this._httpClient.post<JwtAuthResponse>(this._url + "login", loginPayload).pipe(
      map(data => {
        this._localStorageService.store('authenticationToken', data.authenticationToken);
        this._localStorageService.store('username', data.username);
        return true; // component will receive true if login is successful and take user to home page
      })
    );
  }

  isAuthenticated(): Boolean {
    return this._localStorageService.retrieve('username') != null;
  }

  logout() {
    this._localStorageService.clear('authenticationToken');
    this._localStorageService.clear('username');
  }
}
