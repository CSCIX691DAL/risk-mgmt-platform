import { Injectable } from '@angular/core';
import {PolicyModel} from './policy.model';
import {IssueModel} from '../issue-list/issue.model';
import {DbService} from '../db.service';
import {ToastrService} from 'ngx-toastr';
import {TaskModel} from '../task-list/task.model';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';

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

        const riskArr = [];

        newPolicy.riskProfiles.forEach((risk) => {
          riskArr.push(new RiskProfileModel(0, risk, '', null, null, null, null, null));
        });

        this.policies.push(new PolicyModel(newPolicy.id, newPolicy.title, newPolicy.description,  riskArr));
      });
  
    });
  }

  // Delete issue function
  deletePolicy(policy: PolicyModel): void {
    this.notificationService.success('Policy "' + policy.title + '" has been deleted.', 'Policy Successfully Deleted');

    console.log(policy);

    this.dbService.policyRef.doc(policy.title).delete();

    this.policies = this.policies.filter(x => x.title !== policy.title);

  }

  //add a new policy
  public addNewPolicy(policy: PolicyModel): void {
    this.policies.push(policy);

    const riskTitles = [];

    policy.riskProfile.forEach((risk) => {
      riskTitles.push(risk);
      console.log(risk);
    });

    console.log(riskTitles);
    console.log(policy);

    this.dbService.policyRef.doc(policy.title).set({
      title: policy.title,
      description: policy.description,
      riskProfiles: riskTitles
    });
  }

  //edit an existing policy
  public editPolicy(newModel: PolicyModel, oldModel: PolicyModel): void {
    this.policies[this.policies.findIndex(task => task.title === oldModel.title)] = newModel;

    console.log("New array");
    console.log(this.policies);
  }

}
