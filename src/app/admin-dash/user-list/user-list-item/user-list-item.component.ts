import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from '../../../users.model';
import {OrganizationService} from '../../../organization.service';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: UsersModel;

  public totalTasks: number;
  public completedTasks: number;

  public totalOrgs: number = 0;

  constructor(public orgService: OrganizationService) { }


  ngOnInit(): void {
    this.orgService.getUserOrgCount(this.user.id).then((result) => {
      this.totalOrgs = result;
    });
  }

}
