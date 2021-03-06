import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from '../../../../users.model';
import {OrganizationModel} from '../../../../organization.model';
import {OrganizationService} from '../../../../organization.service';

@Component({
  selector: 'app-org-users-item',
  templateUrl: './org-users-item.component.html',
  styleUrls: ['./org-users-item.component.css']
})
export class OrgUsersItemComponent implements OnInit {

  @Input() user: UsersModel;
  @Input() org: OrganizationModel;

  public totalTasks: number;
  public completedTasks: number;

  constructor(public orgService: OrganizationService) { }

  ngOnInit(): void {

    let arr = this.user.firstName.split(' ');
    this.user.firstName = arr[0];
    this.user.lastName = arr[1];

    this.orgService.getUserTaskCount(this.org.orgName, this.user.id).then((result) => {
      this.totalTasks = result;
    });

    this.orgService.getUserAllCompletedTasks(this.org.orgName, this.user.id).then((result) => {
      this.completedTasks = result;
    });

  }

}
