import { Injectable } from '@angular/core';
import { TokenService } from "../token/token.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthenticationRequest } from "../models/authentication-request";
import { AuthenticationResponse } from "../models/authentication-response";
import { RegistrationRequest } from "../models/registration-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  login(req: AuthenticationRequest): Observable<AuthenticationResponse> {
    return new Observable(observer => {
      this.httpClient.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/login", req).subscribe({
        next: (response) => {
          if (response.token) {
            this.tokenService.token = response.token;
          }
          observer.next(response);
          observer.complete();
        },
        error: (err) => {
          observer.error(err);
        }
      });
    });
  }

  register(req: RegistrationRequest): Observable<AuthenticationResponse> {
    return new Observable(observer => {
      this.httpClient.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/register", req).subscribe({
        next: (response) => {
          if (response.token) {
            this.tokenService.token = response.token;
          }
          observer.next(response);
          observer.complete();
        },
        error: (err) => {
          observer.error(err);
        }
      });
    });
  }

  logout(): void {
    this.tokenService.clearToken();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.tokenService.token;
  }
}
