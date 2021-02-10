import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import CollectionReference = firebase.firestore.CollectionReference;
import {OrganizationService} from './organization.service';
import {Router} from '@angular/router';
import {TaskService} from './task-list/task-service';
import {IssueService} from './issue-list/issue.service';
import {CategoryService} from './risk-categories/category.service';
import {RiskProfileService} from './risk-profile/risk-profile.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  taskRef: CollectionReference;
  issueRef: CollectionReference;
  riskProfileRef: CollectionReference;
  categoryRef: CollectionReference;
  organizationRef: CollectionReference;
  userRef: CollectionReference;

  constructor(firestore: AngularFirestore, public organizationService: OrganizationService, public router: Router) {
    /* Thanks to Quince for the following solution to get a value from firestore documents
     * https://stackoverflow.com/questions/47549001/how-to-use-get-method-to-retrieve-all-collection-in-angularfire2 */
    this.organizationRef = firestore.firestore.collection('organizations');

    this.userRef = firestore.firestore.collection('users');
    this.taskRef = this.organizationRef.doc(organizationService.currentOrganization).collection('tasks');
    this.issueRef = this.organizationRef.doc(organizationService.currentOrganization).collection(`issues`);
    this.riskProfileRef = this.organizationRef.doc(organizationService.currentOrganization).collection('riskProfiles');
    this.categoryRef = this.organizationRef.doc(organizationService.currentOrganization).collection('categories');

    console.log(this.issueRef.path);
  }

  setCurrentOrgOnLogin(email: string): void {
    this.userRef.doc(email).get().then((document) => {
      this.organizationService.currentOrganization = document.data().organizations[0];

      this.taskRef = this.organizationRef.doc(this.organizationService.currentOrganization).collection('tasks');
      this.issueRef = this.organizationRef.doc(this.organizationService.currentOrganization).collection(`issues`);
      this.riskProfileRef = this.organizationRef.doc(this.organizationService.currentOrganization).collection('riskProfiles');
      this.categoryRef = this.organizationRef.doc(this.organizationService.currentOrganization).collection('categories');

      console.log(this.issueRef.path);


      this.router.navigate(['dashboard']);
    });
  }
}
