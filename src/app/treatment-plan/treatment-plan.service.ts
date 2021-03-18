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
import {UsersService} from '../users.service';

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

  constructor( public riskProfileService: RiskProfileService, public taskService: TaskService,
               public categoryService: CategoryService, public userService: UsersService, public dbService: DbService, public notificationService: ToastrService) {
    this.categories = categoryService.getCategories();

    this.riskProfiles = riskProfileService.getRiskProfiles();
    this.tasks = taskService.getTaskItemArray();
  }
  // Updates issue list
  triggerToUpdate = new Subject<boolean>();
  public updatePlanArray(): void {
    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.treatmentPlans = [];
    this.riskProfileService.updateRiskProfileArray();
    this.taskService.updateTaskArray();

    this.dbService.treatmentRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newPlan = doc.data();

        const tasks = [];
        const riskArr = [];

        this.riskProfiles.forEach((risk) => {
          riskArr.push(risk);
        });
        this.tasks.forEach((task) => {
          tasks.push(task);
        });

        this.treatmentPlans.push(new TreatmentPlanModel(newPlan.riskProfile, newPlan.tasks, newPlan.title, newPlan.id ));
      });
      this.triggerToUpdate.next(true);
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
    // this.triggerToUpdate.next(true);
  }
  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans.slice();
  }

// Add plan function
  addPlan(plan: TreatmentPlanModel): void {

    const riskTitle = plan.riskProfile;
    // const riskTitle = [plan.riskProfile];
    const tasksArr = [];

    console.log(plan.tasks);
    // use below code to retrieve tasks
    plan.tasks.forEach((task) => {
      tasksArr.push(task);
      console.log(task);
    });

// Array is empty, set new ID to 1
//     if (this.treatmentPlans.length === 0) {
//       plan.setId(0);
//     }
//     // Array has one or more objects
//     else {
      // Generates number equal to the length of our issues array + 1
    const max = Math.max.apply(Math, this.treatmentPlans.map( (x) => +x.id)) + 1;
    plan.setId(max);
    // }

    this.treatmentPlans.push(plan);
    const riskConst = {
      id: riskTitle.id,
      title: riskTitle.title,
      description: riskTitle.description,
      likelihood: riskTitle.likelihood,
      impact: riskTitle.impact,
      category: riskTitle.riskCategory.name,
      riskCategory: riskTitle.riskCategory.name,
      sourceOfRisk: riskTitle.sourceOfRisk,
    };
    const planConst = {
      riskProfile: riskConst,
      tasks: tasksArr,
      title: plan.title,
      id: max,
    };


    this.dbService.treatmentRef.doc(plan.title).set(planConst);
    //this.triggerToUpdate.next(true);
    console.log(this.treatmentPlans);

    this.notificationService.success('Plan "' + plan.title + '" has been added.', 'Treatment Plan Successfully Created');

  }

}
