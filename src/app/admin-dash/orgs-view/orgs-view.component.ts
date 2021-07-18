import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../organization.service';

@Component({
  selector: 'app-orgs-view',
  templateUrl: './orgs-view.component.html',
  styleUrls: ['./orgs-view.component.css']
})

export class OrgsViewComponent implements OnInit {

  constructor(public organizationService: OrganizationService) { }

  ngOnInit(): void { }

}
