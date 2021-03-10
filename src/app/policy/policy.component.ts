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

  policyarray: PolicyModel[];

  ngOnInit(): void {
    this.policyarray = [];
    this.policyarray.push(new PolicyModel(2, 'policytest', 'This is a test', []));
  }


}
