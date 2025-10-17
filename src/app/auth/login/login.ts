import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please enter valid email and password.');
      return;
    }

    const { email, password } = form.value;
    this.loading = true;

    this.authService.login({ email, password }).subscribe({
      next: (res) => {
        
        
        this.loading = false;

        // Store token (if backend sends one)
        if (res.token) {
          localStorage.setItem('authToken', res.token);
        }

        // Redirect user to dashboard or homepage
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.loading = false;

        if (err.status === 401) {
          alert('Invalid credentials! Please try again.');
        } else {
          alert('Something went wrong. Please try again later.');
        }
      },
    });
  }
  

}
