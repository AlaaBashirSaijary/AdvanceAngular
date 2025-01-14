import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user: firebase.User | null = null; // متغير لتخزين بيانات المستخدم

  constructor(public auth: AngularFireAuth) {
    // الاستماع إلى حالة تسجيل الدخول
    this.auth.authState.subscribe(user => {
      this.user = user; // تخزين بيانات المستخدم إذا كان مسجلاً الدخول
    });
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
