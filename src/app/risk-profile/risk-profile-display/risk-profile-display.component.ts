import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileService} from '../risk-profile.service';
import {RiskProfileModel} from '../risk-profile.model';


@Component({
  selector: 'app-risk-profile-display',
  templateUrl: './risk-profile-display.component.html',
  styleUrls: ['./risk-profile-display.component.css']
})
export class RiskProfileDisplayComponent implements OnInit {

  @Input() riskProfileItem: RiskProfileModel;
  constructor(public riskProfileService: RiskProfileService) { }

  ngOnInit(): void {
  }
  // Delete issue function : Relies on deleteIssue() from issue.service.ts
  onDeleteRiskProfile(): void {
    this.riskProfileService.deleteRiskProfile(this.riskProfileItem);
  }
}
