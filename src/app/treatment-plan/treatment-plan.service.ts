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
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TreatmentPlanService {
  // need category model for easiest sorting I think
  tasks: Array<TaskModel>;
  treatmentPlanService: TreatmentPlanService;
  riskProfiles: RiskProfileModel[];
  treatmentPlans: TreatmentPlanModel[] = [];
  categories: CategoryModel[];

  constructor( public riskProfileService: RiskProfileService, taskService: TaskService,
               categoryService: CategoryService, public dbService: DbService, public notificationService: ToastrService) {
    this.categories = categoryService.getCategories();
    this.riskProfiles = riskProfileService.getRiskProfiles();
    this.tasks = taskService.getTaskItemArray();
  }
  // Updates issue list
  triggerToUpdate = new Subject<boolean>();

  updateTreatmentPlans(): void {
    // update plans from db + into db
    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.treatmentPlans = [];

    this.dbService.treatmentRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newPlan = doc.data();

        this.treatmentPlans.push(new TreatmentPlanModel(newPlan.riskProfile, newPlan.tasks, newPlan.title, newPlan.id));
      });
      this.triggerToUpdate.next(true);
    });
  }

  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans.slice();
  }

// Add plan function
  addPlan(plan: TreatmentPlanModel): void {

    // Array is empty, set new ID to 1
    if (this.treatmentPlans.length === 0) {
      // Creates new IssueModel object
      const newPlan = new TreatmentPlanModel(this.riskProfiles[0], [], plan.title, 0);
      // Pushes new IssueModel object to issues array
      this.treatmentPlans.push(newPlan);
      // Update screen
      this.triggerToUpdate.next(true);
    }
    // Array has one or more objects
    else {
      // Generates number equal to the length of our issues array + 1
      const max = Math.max.apply(Math, this.treatmentPlans.map( (x) => +x.id)) + 1;
      // Creates new IssueModel object
      const newPlan = new TreatmentPlanModel(this.riskProfiles[0], [], plan.title, max);
      // Pushes new IssueModel object to issues array
      this.treatmentPlans.push(newPlan);
      // Update screen
      this.triggerToUpdate.next(true);
    }

    console.log(this.treatmentPlans)

    this.notificationService.success('Issue "' + plan.title + '" has been added.', 'Treatment Plan Successfully Created');

  }

}
