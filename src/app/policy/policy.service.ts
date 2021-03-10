import { Injectable } from '@angular/core';
import {PolicyModel} from './policy.model';
import {IssueModel} from '../issue-list/issue.model';
import {DbService} from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  policies: PolicyModel[];

  constructor(public dbService: DbService) { }

  public updatePolicyArray(): void {

    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.policies = [];

    this.dbService.policyRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newPolicy = doc.data();

        this.policies.push(new PolicyModel(newPolicy.id, newPolicy.title, newPolicy.description,  []));
      });
      //this.triggerToUpdate.next(true);
    });
  }

  public addNewPolicy(policy: PolicyModel): void {

  }


}
