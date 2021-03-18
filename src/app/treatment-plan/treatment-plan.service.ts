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
import {PolicyModel} from '../policy/policy.model';

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

  currentlySelectedPlan: TreatmentPlanModel;

  constructor( public riskProfileService: RiskProfileService, taskService: TaskService,
               categoryService: CategoryService, public dbService: DbService, public notificationService: ToastrService) {
    this.categories = categoryService.getCategories();
    this.riskProfiles = riskProfileService.getRiskProfiles();
    this.tasks = taskService.getTaskItemArray();
  }
  // Updates issue list
  triggerToUpdate = new Subject<boolean>();
  public updatePlanArray(): void {
    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.treatmentPlans = [];

    this.dbService.treatmentRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newPlan = doc.data();

        const riskArr = [];
        const tasks = [];

        // newPlan.riskProfiles.forEach((risk) => {
        //   riskArr.push(new RiskProfileModel(0, risk, '', null, null, null, null, null));
        // });
        riskArr.push(new RiskProfileModel(0, '', '', null, null, null, null, null));

        this.treatmentPlans.push(new TreatmentPlanModel(riskArr, tasks, newPlan.title, newPlan.id  ));
      });
      // this.triggerToUpdate.next(true);
    });
  }

  // updateTreatmentPlans(): void {
  //   // update plans from db + into db
  //   // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
  //   this.treatmentPlans = [];
  //
  //   this.dbService.treatmentRef.get().then((querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       const newPlan = doc.data();
  //       this.treatmentPlans.push(new TreatmentPlanModel(newPlan.riskProfile, [],
  //       newPlan.title, newPlan.id));
  //     });
  //     this.triggerToUpdate.next(true);
  //   });
  // }

  // Delete issue function
  deletePlan(plan: TreatmentPlanModel): void {
    this.notificationService.success('Plan "' + plan.title + '" has been deleted.', 'Plan Successfully Deleted');

    this.treatmentPlans = this.treatmentPlans.filter(x => x.id !== plan.id);

    this.dbService.issueRef.doc(plan.title).delete();

    // console.log(this.issues);
    this.triggerToUpdate.next(true);
  }
  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans.slice();
  }

// Add plan function
  addPlan(plan: TreatmentPlanModel): void {

    const riskTitles = [];

    riskTitles.push(plan.riskProfile);
    console.log(plan.riskProfile);
    // plan.riskProfile.forEach((risk) => {
    //   riskTitles.push(risk);
    //   console.log(risk);
    // });

    // Array is empty, set new ID to 1
    if (this.treatmentPlans.length === 0) {
      // Creates new IssueModel object
      const newPlan = new TreatmentPlanModel(plan.riskProfile, plan.tasks, plan.title, 0);
      // Pushes new IssueModel object to issues array
      this.treatmentPlans.push(newPlan);
      // Update screen
      // this.triggerToUpdate.next(true);
      this.dbService.treatmentRef.doc(plan.title).set({
        title: plan.title,
        tasks: plan.tasks,
        riskProfiles: riskTitles,
        id: 0,
      });
    }
    // Array has one or more objects
    else {
      // Generates number equal to the length of our issues array + 1
      const max = Math.max.apply(Math, this.treatmentPlans.map( (x) => +x.id)) + 1;
      // Creates new TreatmentPlanModel object
      const newPlan = new TreatmentPlanModel(plan.riskProfile, plan.tasks, plan.title, max);
      // Pushes new TreatmentPlanModel object to issues array
      this.treatmentPlans.push(newPlan);
      // Update screen
      // this.triggerToUpdate.next(true);
      this.dbService.treatmentRef.doc(plan.title).set({
        title: newPlan.title,
        tasks: plan.tasks,
        riskProfiles: riskTitles,
        id: newPlan.id,
      });
    }

    console.log(this.treatmentPlans);

    this.notificationService.success('Plan "' + plan.title + '" has been added.', 'Treatment Plan Successfully Created');

  }

}
