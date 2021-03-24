import { Component, OnInit } from '@angular/core';
import {OrganizationService} from '../../organization.service';

@Component({
  selector: 'app-orgs-list',
  templateUrl: './orgs-list.component.html',
  styleUrls: ['./orgs-list.component.css']
})
export class OrgsListComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  ngOnInit(): void {
  }

}
