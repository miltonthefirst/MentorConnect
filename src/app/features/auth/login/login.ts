import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const { email, password, rememberMe } = this.loginForm.value;

      console.log('Email/Password login:', { email, password, rememberMe });

      // TODO: Implement Firebase email/password authentication
      setTimeout(() => {
        this.isLoading = false;
        alert('Login successful with email/password!');
      }, 1500);
    } else {
      this.errorMessage = 'Please fill in all required fields correctly';
    }
  }

  loginWithGoogle(): void {
    console.log('Google login initiated');
    this.isLoading = true;
    
    // TODO: Implement Firebase Google authentication
    setTimeout(() => {
      this.isLoading = false;
      alert('Google login successful! (Demo)');
    }, 1500);
  }

  loginWithGithub(): void {
    console.log('GitHub login initiated');
    this.isLoading = true;
    
    // TODO: Implement Firebase GitHub authentication
    setTimeout(() => {
      this.isLoading = false;
      alert('GitHub login successful! (Demo)');
    }, 1500);
  }

  loginWithFacebook(): void {
    console.log('Facebook login initiated');
    this.isLoading = true;
    
    // TODO: Implement Firebase Facebook authentication
    setTimeout(() => {
      this.isLoading = false;
      alert('Facebook login successful! (Demo)');
    }, 1500);
  }
}