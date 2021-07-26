import { Component, Input, OnInit } from '@angular/core';
import { RiskProfileModel } from '../../../risk-profile/risk-profile.model';
import { IssueModel } from '../../../issue-list/issue.model';
import { OrganizationModel } from '../../../organization.model';
import { OrganizationService } from '../../../organization.service';

@Component({
  selector: 'app-org-risk-issues',
  templateUrl: './org-risk-issues.component.html',
  styleUrls: ['./org-risk-issues.component.css']
})

export class OrgRiskIssuesComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  @Input() org: OrganizationModel;

  issueList: IssueModel[] = [];

  ngOnInit(): void {
    this.orgService.getAllIssuesByOrg(this.org.orgName).then((result) => {
      this.issueList = result;
    });
  }

}
