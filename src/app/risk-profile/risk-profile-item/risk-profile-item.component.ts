import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileModel} from '../risk-profile.model';
import {RiskProfileService} from '../risk-profile.service';

@Component({
  selector: 'app-risk-profile-item',
  templateUrl: './risk-profile-item.component.html',
  styleUrls: ['./risk-profile-item.component.css']
})

export class RiskProfileItemComponent implements OnInit {

  @Input() riskProfileItem: RiskProfileModel;

  constructor(public riskProfileService: RiskProfileService) {}

  ngOnInit(): void {}

  // Delete issue function : Relies on deleteIssue() from issue.service.ts
  onDeleteRiskProfile(): void {
    this.riskProfileService.deleteRiskProfile(this.riskProfileItem);
  }

}
