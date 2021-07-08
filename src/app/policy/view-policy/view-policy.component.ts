import {Component, Input, OnInit} from '@angular/core';
import {PolicyModel} from '../policy.model';
import {DbService} from '../../db.service';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {PolicyService} from '../policy.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  constructor(public dbService: DbService, public riskService: RiskProfileService, public policyService: PolicyService) { }

  @Input() inputPolicyItem: PolicyModel;

  public currentModel: PolicyModel;

  ngOnInit(): void {

    this.currentModel = this.inputPolicyItem;

  }

}
