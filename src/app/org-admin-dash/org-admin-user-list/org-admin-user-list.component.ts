import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from '../../users.model';
import {OrganizationService} from '../../organization.service';
import {OrganizationModel} from '../../organization.model';

@Component({
  selector: 'app-org-admin-user-list',
  templateUrl: './org-admin-user-list.component.html',
  styleUrls: ['./org-admin-user-list.component.css']
})
export class OrgAdminUserListComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  @Input() org: OrganizationModel;

  userArr: UsersModel[] = [];

  ngOnInit(): void {
    this.orgService.getUserArrayByOrg(this.orgService.currentOrganization).then((result) => {
      this.userArr = result;
    });
  }

}
