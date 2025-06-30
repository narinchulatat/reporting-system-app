import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): boolean {
    // ตัวอย่างล็อกอินแบบ mock
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'example-token');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
