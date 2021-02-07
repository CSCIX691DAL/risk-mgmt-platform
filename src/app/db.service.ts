import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import CollectionReference = firebase.firestore.CollectionReference;

@Injectable({
  providedIn: 'root'
})
export class DbService {

  taskRef: CollectionReference;
  issueRef: CollectionReference;

  constructor(firestore: AngularFirestore) {
    /* Thanks to Quince for the following solution to get a value from firestore documents
     * https://stackoverflow.com/questions/47549001/how-to-use-get-method-to-retrieve-all-collection-in-angularfire2 */
    this.taskRef = firestore.firestore.collection(`task`);
    this.issueRef = firestore.firestore.collection(`issues`);
  }
}
