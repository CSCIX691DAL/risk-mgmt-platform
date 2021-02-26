import {Injectable, Input} from '@angular/core';
import {RiskProfileService} from '../risk-profile/risk-profile.service';
import {TreatmentPlanModel} from '../treatment-plan/treatment-plan.model';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {TaskModel} from '../task-list/task.model';
import {Subject, Subscription} from 'rxjs';
import {DbService} from '../db.service';
import {TaskService} from '../task-list/task-service';
import {IssueModel} from '../issue-list/issue.model';
import {CategoryService} from '../risk-categories/category.service';
import {CategoryModel} from '../risk-categories/category.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentPlanService {
  // need category model for easiest sorting I think
  tasks: Array<TaskModel>;
  treatmentPlanService: TreatmentPlanService;
  riskProfiles: RiskProfileModel[];
  treatmentPlans: TreatmentPlanModel[];
  categories: CategoryModel[];

  constructor( public riskProfileService: RiskProfileService, taskService: TaskService, categoryService: CategoryService, public dbService: DbService) {
    this.treatmentPlans = [];
    this.categories = categoryService.getCategories();
    this.riskProfiles = riskProfileService.getRiskProfiles();
    this.tasks = taskService.getTaskItemArray();
  }
  // Updates issue list
  triggerToUpdate = new Subject<boolean>();

  updateTreatmentPlans(): void {
    // update plans from db + into db
    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    /* this.treatmentPlans = [];

    this.dbService.treatmentRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newPlan = doc.data();

        this.treatmentPlans.push(new TreatmentPlanModel(newPlan.riskProfile, newPlan.tasks, newPlan.title, false, false, false));
      });
      this.triggerToUpdate.next(true);
    });
    */
    // force display example treatmentPlan
    this.treatmentPlans.push(new TreatmentPlanModel((new RiskProfileModel(1, 'Risk Profile 1', 'This is risk profile 1', 9, 5, this.categories[0], this.categories[0], 'Source Of Risk #1')), [] , 'title', false, false, false));
  }

  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans.slice();
  }

}
