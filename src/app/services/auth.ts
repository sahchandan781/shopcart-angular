import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = 'https://quickdeal-backend.vercel.app/api/user'; // your backend API base URL

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  login(userData: any):Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userData)
  }
}