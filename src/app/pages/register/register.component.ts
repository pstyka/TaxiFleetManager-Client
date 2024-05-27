import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = {username: '', password: '', firstName: '', lastName: ''};
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService

  ) {}

  loginPage() {
    this.router.navigate(['/login']);
  }
  register() {
    //TODO: Add implementation and routing to the login page
  }

}
