import {Injectable, Input} from '@angular/core';
import {RiskProfileService} from '../risk-profile/risk-profile.service';
import {TreatmentPlanModel} from '../treatment-plan/treatment-plan.model';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {TaskModel} from '../task-list/task.model';
import {Subject, Subscription} from 'rxjs';
import {DbService} from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class TreatmentPlanService {
  // need category model for easiest sorting I think
  tasks: TaskModel;
  triggerToUpdate = new Subject<boolean>();
  treatmentPlanService: TreatmentPlanService;
  riskProfiles: RiskProfileModel[];
  treatmentPlans: TreatmentPlanModel[];
  // set data here
  //    [this.riskProfileService.getRiskProfiles(), 'title',
  //  new TreatmentOptionsModel(false, false, false)];

  constructor( public riskProfileService: RiskProfileService,  public dbService: DbService) {
    this.treatmentPlans = [];
    this.riskProfileService.updateRiskProfileArray();
    this.riskProfiles = riskProfileService.getRiskProfiles();

    this.updatePlans();
  }
  updatePlans(): void {
    console.log(this.riskProfiles);

    console.log(this.riskProfileService.getRiskProfiles());

    this.riskProfiles.forEach((profile) => {
      console.log(profile);
      this.treatmentPlans.push(new TreatmentPlanModel(profile, ['task 1', 'task2'], 'title', false, false, false));
    });

  }

  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans.slice();
  }

  // Sort Level of Risk
  sortLevelofRisk(sortCode: number): void {
    // sortCode of 1 : sort Level of Risk High to Low
    if (sortCode === 1) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.getLevelOfRisk()  > n2.getLevelOfRisk() ) { return -1; }
        if (n1.getLevelOfRisk() < n2.getLevelOfRisk() ) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort likelihood Low to High
    else if (sortCode === 2) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.getLevelOfRisk()  > n2.getLevelOfRisk() ) { return 1; }
        if (n1.getLevelOfRisk() < n2.getLevelOfRisk() ) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

}
