import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {OrganizationService} from '../organization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userAuthService: UserAuthService, public organizationService: OrganizationService) { }

  ngOnInit(): void {
  }

}
