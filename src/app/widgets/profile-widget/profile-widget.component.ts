import { Component, OnInit } from '@angular/core';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';

@Component({
  selector: 'app-profile-widget',
  templateUrl: './profile-widget.component.html',
  styleUrls: ['./profile-widget.component.css']
})
export class ProfileWidgetComponent implements OnInit {

  constructor( private riskProfileService: RiskProfileService ) { }

  ngOnInit(): void { }

  // Calculate risk levels for all profiles
  public countRiskLevel(whichRiskLevel: number): number {
    return this.riskProfileService.countAllRiskLevels(whichRiskLevel);
  }

}
