import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('authToken'); // Replace with your actual authentication logic
    if (isLoggedIn) {
      this.router.navigate(['/']); // Redirect to the home page or dashboard
      return false;
    }
    return true; // Allow access if not logged in
  }
}
