import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import {Router} from '@angular/router';
import {DbService} from './db.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  user$: Observable<firebase.User>;

  // Source: https://www.positronx.io/firebase-authentication-in-angular-8-with-angularfire2/
  constructor(public fireAuth: AngularFireAuth, private router: Router, public dbService: DbService) {
    this.user$ = fireAuth.authState;
  }

  userSignUp(email: string, password: string, verifyCode: string): void {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(result => {
      // Setting ID as the user's email - should be unique.
      this.dbService.userRef.doc(email).set({
        id: email
      });
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
    this.router.navigate(['']);
  }

  getUserVal() {
    console.log(this.fireAuth.currentUser);
  }

}
