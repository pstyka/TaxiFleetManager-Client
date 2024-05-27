import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models/authentication-request';
import { Router } from "@angular/router";
import { AuthenticationControllerService } from "../../services/services/authentication-controller.service";
import { TokenService } from "../../services/token/token.service";
import { AuthService } from "../../services/auth/auth.service";
import { AuthenticationResponse } from "../../services/models/authentication-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  authRequest: AuthenticationRequest = { username: '', password: '' };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  login() {
    this.authService.login(
      this.authRequest
    ).subscribe({
      next:(response: AuthenticationResponse) => {
        this.tokenService.token = response.token as string;
        this.router.navigate(['/dashboard']);
        console.log("Received token: ", this.tokenService.token);
      },
      error: (error) => {
        console.error('Error during login:', error);
        this.errorMsg.push(error.message || 'Unknown error during login');
      }
    });
  }

  register() {
    // Implement registration logic here
  }

  registerPage() {
    this.router.navigate(['/register']);
  }
}
