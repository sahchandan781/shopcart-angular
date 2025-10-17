
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      alert('Please fill out all fields correctly!');
      return;
    }

    this.loading = true;
    const { name, email, password } = form.value;

    this.authService.signup({ name, email, password }).subscribe({
      next: (res) => {
        console.log('Signup success:', res);
        
        form.reset();
        this.loading = false;

        // Redirect to login after signup
        this.router.navigate(['/login']);
      },
      error: (err) => {
       
        this.loading = false;
        if (err.status === 400) {
          alert(err.error.message || 'Email already registered!');
        } else {
          alert('Something went wrong. Please try again later.');
        }
      },
    });

  }

}
