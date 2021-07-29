import { Component, Input, OnInit } from '@angular/core';
import { UsersModel } from '../../../users.model';
import { OrganizationService } from '../../../organization.service';

@Component({
  selector: 'app-org-admin-user-list-item',
  templateUrl: './org-admin-user-list-item.component.html',
  styleUrls: ['./org-admin-user-list-item.component.css']
})

export class OrgAdminUserListItemComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  countTasksCreated: number = 0;
  countTasksCompleted: number = 0;

  @Input() user: UsersModel;

  ngOnInit(): void {
    this.orgService.getUserTaskCount(this.orgService.currentOrganization, this.user.id).then((result) => {
      this.countTasksCreated = result;
    });

    this.orgService.getUserAllCompletedTasks(this.orgService.currentOrganization, this.user.id).then((result) => {
      this.countTasksCompleted = result;
    });
  }

}
