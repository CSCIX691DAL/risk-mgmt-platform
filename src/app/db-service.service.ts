import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  task: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.task = firestore.collection('task').valueChanges();
  }
}
