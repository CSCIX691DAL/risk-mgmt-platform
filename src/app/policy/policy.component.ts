import { Component, OnInit } from '@angular/core';
import {PolicyModel} from './policy.model';
import {PolicyService} from './policy.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {

  constructor(public policyService: PolicyService) { }

  policyArray: PolicyModel[];

  ngOnInit(): void {
    this.policyArray = [];
    this.policyArray.push(new PolicyModel(2, 'policytest', 'This is a test', []));
  }


}
