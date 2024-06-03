import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { RegistrationRequest } from '../../services/models/registration-request';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  loginPage() {
    this.router.navigate(['/login']);
  }

  register() {
    if (this.registerForm.invalid) {
      this.errorMsg = 'Please fill out all fields';
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMsg = 'Passwords do not match';
      return;
    }

    const registerRequest: RegistrationRequest = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName
    };

    this.authService.register(registerRequest).subscribe({
      next: (response) => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.errorMsg = 'Registration failed: ' + (err.error.message || 'Unknown error');
      }
    });
  }
}
