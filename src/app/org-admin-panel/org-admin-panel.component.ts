import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-org-admin-panel',
  templateUrl: './org-admin-panel.component.html',
  styleUrls: ['./org-admin-panel.component.css']
})
export class OrgAdminPanelComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    console.log(this.userService.getInactiveUsers());
  }

}
