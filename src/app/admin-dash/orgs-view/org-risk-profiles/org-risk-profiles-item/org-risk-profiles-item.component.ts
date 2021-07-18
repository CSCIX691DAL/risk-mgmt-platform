import { Component, Input, OnInit } from '@angular/core';
import { OrganizationModel } from '../../../../organization.model';
import { RiskProfileModel } from '../../../../risk-profile/risk-profile.model';

@Component({
  selector: 'app-org-risk-profiles-item',
  templateUrl: './org-risk-profiles-item.component.html',
  styleUrls: ['./org-risk-profiles-item.component.css']
})

export class OrgRiskProfilesItemComponent implements OnInit {

  constructor() { }

  @Input() riskProfile: RiskProfileModel;

  ngOnInit(): void { }

}
