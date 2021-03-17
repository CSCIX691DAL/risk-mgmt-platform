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

  public taskRef: CollectionReference;
  public issueRef: CollectionReference;
  public riskProfileRef: CollectionReference;
  public categoryRef: CollectionReference;
  public organizationRef: CollectionReference;
  public userRef: CollectionReference;
  public policyRef: CollectionReference;

  constructor(firestore: AngularFirestore, public router: Router) {
    /* Thanks to Quince for the following solution to get a value from firestore documents
     * https://stackoverflow.com/questions/47549001/how-to-use-get-method-to-retrieve-all-collection-in-angularfire2 */
    this.organizationRef = firestore.firestore.collection('organizations');


    firestore.collection('organizations').get().subscribe((doc) => {
      console.log(doc);
    });

    this.userRef = firestore.firestore.collection('users');
  }
}
