import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {RiskProfileService} from '../risk-profile/risk-profile.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit {

  riskProfiles: RiskProfileModel[];
  sub: Subscription;

  constructor(private riskProfileService: RiskProfileService) { }

  @Input() riskProfileItem: RiskProfileModel;

  RiskProfileSearchText: string;
  currentCategory: string;

  ngOnInit(): void {
    this.riskProfiles = this.riskProfileService.getRiskProfiles();
    // Listener : listening to our component
    this.sub = this.riskProfileService.triggerToUpdate.subscribe(
        (value) =>
        {
          console.log(value);
          this.riskProfiles = this.riskProfileService.getRiskProfiles();
        }
    );
  }
  //helps sort somehow
  setCurrentCategory(value: string){
    this.currentCategory = value;
  }

}
