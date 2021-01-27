import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RegisterPayload } from './register-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = "http://localhost:8082/";

  constructor(private _httpClient: HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this._httpClient.post(this.url + "signup", registerPayload);
  }
}
