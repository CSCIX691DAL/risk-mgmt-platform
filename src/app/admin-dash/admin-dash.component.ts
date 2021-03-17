import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../organization.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  currentUserCount: number;
  currentOrgCount: number;

  ngOnInit(): void {
    this.orgService.getAllOrgsCount().then((result) => {
      this.currentOrgCount = result;
    });

    this.orgService.getAllUsersCount().then((result) => {
      this.currentUserCount = result;
    });
  }

}
