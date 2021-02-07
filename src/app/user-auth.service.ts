import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user$: Observable<firebase.User>;

  // Source: https://www.positronx.io/firebase-authentication-in-angular-8-with-angularfire2/
  constructor(public fireAuth: AngularFireAuth) {
    this.user$ = fireAuth.authState;
  }

  userSignUp(email: string, password: string, verifyCode: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(result => {
      console.log("Test - worked");
    }).catch(err => {
      console.log(err);
    });
  }

  userSignIn(email: string, password: string): any {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(result => {
      return true;
    }).catch(error => {
      return false;
    });
  }

  userSignOut() {
    this.fireAuth.signOut();
    console.log('Signed out');

    console.log(this.user$);
  }


}
