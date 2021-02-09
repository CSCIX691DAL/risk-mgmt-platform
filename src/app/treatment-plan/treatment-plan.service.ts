import {Injectable, Input} from '@angular/core';
import {RiskProfileService} from '../risk-profile/risk-profile.service';
import {TreatmentPlanModel} from '../treatment-plan/treatment-plan.model';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentPlanService {
  triggerToUpdate = new Subject<boolean>();
  treatmentPlanService: TreatmentPlanService;
  riskProfiles: RiskProfileModel[];
  treatmentPlans: TreatmentPlanModel[];
  // set data here
  //    [this.riskProfileService.getRiskProfiles(), 'title',
  //  new TreatmentOptionsModel(false, false, false)];

  constructor( riskProfileService: RiskProfileService ) {
    riskProfileService.updateRiskProfileArray();
    for (const each of this.riskProfiles){
      this.treatmentPlans = [new TreatmentPlanModel(each, 'title', false, false, false)];
    }
  }

  addPlans(): void{
  }

  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans;
  }

}
