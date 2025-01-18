import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthenticationService {
  isLoggedIn: boolean = false;

  constructor() { }
  init() {
    console.log("This is a fake authentication service used for testing");
  }
}




