import {Component, Input, OnInit} from '@angular/core';
import {PolicyModel} from '../policy.model';
import {PolicyService} from '../policy.service';

@Component({
  selector: 'app-policy-item',
  templateUrl: './policy-item.component.html',
  styleUrls: ['./policy-item.component.css']
})
export class PolicyItemComponent implements OnInit {

  constructor(public policyService: PolicyService) { }

  @Input() policyItem: PolicyModel;

  ngOnInit(): void {
    console.log("Policy");
    console.log(this.policyItem);
  }
  //Deleting a policy
  onDeletePolicy(): void {
    this.policyService.deletePolicy(this.policyItem);
  }


}
