import { Component } from '@angular/core';
import { FakeAuthenticationService } from '../../Servises/fake-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor(private auth: FakeAuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.isLoggedIn = true;
    this.auth.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.auth.isLoggedIn = false;
  }
}
