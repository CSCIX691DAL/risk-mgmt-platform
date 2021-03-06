import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, Subscription} from 'rxjs';
import firebase from 'firebase';
import {Router} from '@angular/router';
import {DbService} from './db.service';
import {OrganizationService} from './organization.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public user$: Observable<firebase.User>;
  sub: Subscription;

  public isSiteAdmin: boolean = false;
  public isOrgAdmin: boolean = false;

  // Source: https://www.positronx.io/firebase-authentication-in-angular-8-with-angularfire2/
  constructor(public fireAuth: AngularFireAuth, private router: Router, public dbService: DbService, public organizationService: OrganizationService) {
    this.user$ = fireAuth.authState;

    if (this.user$) {
      this.fireAuth.user.subscribe(user => {
        if (user) {
          this.organizationService.updateOrg(user.email);

          this.getUserRole();
        }
      });
    }

    this.sub = this.organizationService.triggerToUpdate.subscribe(
        (value) =>
        {
          this.getUserRole();
        }
    );
  }

  getUserRole() {
    this.fireAuth.currentUser.then((user) => {
      if (user) {
        this.dbService.userRef.doc(user.email).get().then((acc) => {
          let userData = acc.data();

          if (userData.isAdmin) {
            this.isSiteAdmin = true;
          }

          if (userData.orgAdmin) {
            userData.orgAdmin.forEach((org) => {
              if (org === this.organizationService.currentOrganization) {
                this.isOrgAdmin = true;
              }
            });
          }
        });
      }
    });
  }

  userSignUp(email: string, password: string, verifyCode: string, fullName: string): void {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(result => {
      // Setting ID as the user's email - should be unique.
      this.dbService.organizationRef.doc(verifyCode).collection('users').doc(email).set({
        id: email,
        name: fullName
      });

      this.dbService.organizationRef.doc(verifyCode).set({
        name: verifyCode
      });

      this.dbService.userRef.doc(email).set({
        organizations: [verifyCode],
        name: fullName
      });
    }).catch(err => {
      console.log(err);
    });
  }

  userSignIn(email: string, password: string): any {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(result => {
      this.getUserRole();
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
