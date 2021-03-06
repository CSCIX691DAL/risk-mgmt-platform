import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../organization.service';

@Component({
  selector: 'app-org-admin-dash',
  templateUrl: './org-admin-dash.component.html',
  styleUrls: ['./org-admin-dash.component.css']
})
export class OrgAdminDashComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.orgService.currentlySelectedOrg = this.orgService.currentOrganization;

    console.log("NEW");
    console.log(this.orgService.currentlySelectedOrg);
    console.log("OLD");
    console.log(this.orgService.currentOrganization);
  }
}
