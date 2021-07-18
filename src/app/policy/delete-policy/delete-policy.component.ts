import { Component, OnInit } from '@angular/core';
import {DbService} from '../../db.service';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-policy',
  templateUrl: './delete-policy.component.html',
  styleUrls: ['./delete-policy.component.css']
})
export class DeletePolicyComponent implements OnInit {

  constructor(public dbService: DbService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  OnDelete(): void {

  }

}
