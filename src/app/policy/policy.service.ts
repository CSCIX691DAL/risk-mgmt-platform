import { Injectable } from '@angular/core';
import {PolicyModel} from './policy.model';
import {IssueModel} from '../issue-list/issue.model';
import {DbService} from '../db.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  policies: PolicyModel[];


  constructor(public dbService: DbService, public notificationService: ToastrService) { }

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

  // Delete issue function
  deletePolicy(policy: PolicyModel): void {
    this.notificationService.success('Policy "' + policy.title + '" has been deleted.', 'Policy Successfully Deleted');

    this.policies = this.policies.filter(x => x.title !== policy.title);

    this.dbService.policyRef.doc(policy.title).delete();

    //this.triggerToUpdate.next(true);
  }

  public addNewPolicy(policy: PolicyModel): void {

  }


}
