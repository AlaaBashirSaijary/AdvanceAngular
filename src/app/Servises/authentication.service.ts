import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn: boolean = false;

  constructor() { }

  init() {
    console.log("This is a real authentication service");
  }
}
