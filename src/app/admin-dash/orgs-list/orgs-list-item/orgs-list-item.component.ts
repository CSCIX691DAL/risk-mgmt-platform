import {Component, Input, OnInit} from '@angular/core';
import {OrganizationModel} from '../../../organization.model';
import {OrganizationService} from '../../../organization.service';

@Component({
  selector: 'app-orgs-list-item',
  templateUrl: './orgs-list-item.component.html',
  styleUrls: ['./orgs-list-item.component.css']
})
export class OrgsListItemComponent implements OnInit {

  @Input() org: OrganizationModel;

  numberUsers: number = 0;
  numberTasks: number = 0;
  numberCompletedTasks: number = 0;

  constructor(public orgService: OrganizationService) { }

  ngOnInit(): void {
    this.orgService.getOrgUserCount(this.org.orgName).then((result) => {
      this.numberUsers = result;
    });

    this.orgService.getOrgAllTasks(this.org.orgName).then((result) => {
      this.numberTasks = result;
    });

    this.orgService.getOrgAllCompletedTasks(this.org.orgName).then((result) => {
      this.numberCompletedTasks = result;
    });
  }

  async onClick() {
    this.orgService.currentlySelectedOrg = this.org;
  }

}
