import {Component, Input, OnInit} from '@angular/core';
import {OrganizationModel} from '../../../organization.model';
import {OrganizationService} from '../../../organization.service';
import {UsersService} from '../../../users.service';
import {UsersModel} from '../../../users.model';

@Component({
  selector: 'app-org-users',
  templateUrl: './org-users.component.html',
  styleUrls: ['./org-users.component.css']
})
export class OrgUsersComponent implements OnInit {

  @Input() org: OrganizationModel;

  orgUsers: UsersModel[] = [];

  constructor(public orgService: OrganizationService, public userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserArrayByOrg(this.org.orgName).then((result) => {
      this.orgUsers = result;
    });
  }

}
