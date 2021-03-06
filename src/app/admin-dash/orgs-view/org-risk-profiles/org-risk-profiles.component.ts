import {Component, Input, OnInit} from '@angular/core';
import {OrganizationModel} from '../../../organization.model';
import {RiskProfileModel} from '../../../risk-profile/risk-profile.model';
import {OrganizationService} from '../../../organization.service';

@Component({
  selector: 'app-org-risk-profiles',
  templateUrl: './org-risk-profiles.component.html',
  styleUrls: ['./org-risk-profiles.component.css']
})
export class OrgRiskProfilesComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  @Input() org: OrganizationModel;

  profileList: RiskProfileModel[] = [];

  ngOnInit(): void {

    this.orgService.getAllProfilesByOrgReal(this.org.orgName).then((result) => {
      this.profileList = result;
    });
  }

}
