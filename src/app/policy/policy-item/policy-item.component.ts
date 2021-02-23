import {Component, Input, OnInit} from '@angular/core';
import {PolicyModel} from '../policy.model';

@Component({
  selector: 'app-policy-item',
  templateUrl: './policy-item.component.html',
  styleUrls: ['./policy-item.component.css']
})
export class PolicyItemComponent implements OnInit {

  constructor() { }

  @Input() policyItem: PolicyModel;

  ngOnInit(): void {
  }



}
