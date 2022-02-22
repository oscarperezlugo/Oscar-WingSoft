import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
    providedIn: 'root' // just before your class
  })
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return token !== null;
  }
}