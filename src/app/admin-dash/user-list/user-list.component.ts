import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../users.model';
import { OrganizationService } from '../../organization.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  userList: UsersModel[] = [];

  ngOnInit(): void {
    this.orgService.getAllUserArray().then((result) => {
      this.userList = result;
    });
  }

}
