import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileControllerService } from './services/profile-controller.service';
import { AuthService } from './auth/auth.service';
import {TokenService} from "./token/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthRoleGuard implements CanActivate {
  constructor(
    private profileService: ProfileControllerService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  canActivate(): Observable<boolean> {
    const token = this.tokenService.token;

    return this.profileService.getProfile({}, token).pipe(
      map(profile => {
        if (profile.role === 'ADMIN') {
          return true;
        } else {
          this.router.navigate(['/access-denied']);
          return false;
        }
      }),
      catchError((error) => {
        console.error('Access denied - Admins only', error);
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}
