import { Component, OnInit } from '@angular/core';
import {PolicyService} from '../policy.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PolicyModel} from '../policy.model';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  constructor(public policyService: PolicyService) { }

  // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
  public newPolicyForm = new FormGroup({
    policyTitle: new FormControl(''),
    policyDescription: new FormControl(''),
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    const newPolicy = new PolicyModel(0, this.newPolicyForm.value.policyTitle, this.newPolicyForm.value.policyDescription, []);

    this.policyService.addNewPolicy(newPolicy);
  }

}
