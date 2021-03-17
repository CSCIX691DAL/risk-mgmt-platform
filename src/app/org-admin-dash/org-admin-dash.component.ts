import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../organization.service';

@Component({
  selector: 'app-org-admin-dash',
  templateUrl: './org-admin-dash.component.html',
  styleUrls: ['./org-admin-dash.component.css']
})
export class OrgAdminDashComponent implements OnInit {

  constructor(public orgService: OrganizationService) {

    this.orgService.getAllOrgUserCount(this.orgService.currentOrganization).then((result) => {
      this.countOrgUsers = result;
    });

    this.orgService.getOrgAllTasks(this.orgService.currentOrganization).then((result) => {
      this.countOrgTasks = result;
    });

    this.orgService.getAllOrgProfileCount(this.orgService.currentOrganization).then((result) => {
      this.countOrgProfiles = result;
    });

    this.orgService.getAllOrgCategoryCount(this.orgService.currentOrganization).then((result) => {
      this.countOrgCategories = result;
    });

    this.orgService.getAllOrgIssueCount(this.orgService.currentOrganization).then((result) => {
      this.countOrgIssues = result;
    });

  }

  countOrgCategories = 0;
  countOrgProfiles = 0;
  countOrgTasks = 0;
  countOrgIssues = 0;

  countOrgUsers = 0;

  ngOnInit(): void {


    console.log(this.orgService.currentOrganization);

  }


  onSubmit() {
    this.orgService.currentlySelectedOrg = this.orgService.currentOrganization;
  }
}
