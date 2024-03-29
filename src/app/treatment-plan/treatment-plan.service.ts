import { Injectable, Input } from '@angular/core';
import { RiskProfileService } from '../risk-profile/risk-profile.service';
import { TreatmentPlanModel } from '../treatment-plan/treatment-plan.model';
import { RiskProfileModel } from '../risk-profile/risk-profile.model';
import { TaskModel } from '../task-list/task.model';
import { Subject, Subscription } from 'rxjs';
import { DbService } from '../db.service';
import { TaskService } from '../task-list/task-service';
import { IssueModel } from '../issue-list/issue.model';
import { CategoryService } from '../risk-categories/category.service';
import { CategoryModel } from '../risk-categories/category.model';
import { ToastrService } from 'ngx-toastr';
import { PolicyModel } from '../policy/policy.model';
import { UsersService } from '../users.service';

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
               public categoryService: CategoryService, public userService: UsersService, public dbService: DbService,
               public notificationService: ToastrService) {
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

        const tasks: Array<TaskModel> = [];
        const riskArr: Array<RiskProfileModel> = [];

        this.riskProfiles.forEach((risk) => {
          riskArr.push(risk);
        });
        this.tasks.forEach((task) => {
          tasks.push(task);
        });

        let riskProfileNew = new RiskProfileModel(newPlan.riskProfile.id, newPlan.riskProfile.title,
            newPlan.riskProfile.description, newPlan.riskProfile.likelihood,
            newPlan.riskProfile.impact, newPlan.riskProfile.category, newPlan.riskProfile.riskCategory, newPlan.riskProfile.sourceOfRisk);

        this.treatmentPlans.push(new TreatmentPlanModel(riskProfileNew, newPlan.tasks, newPlan.title));
      });
      this.triggerToUpdate.next(true);
    });
  }

  // Delete issue function
  deletePlan(plan: TreatmentPlanModel): void {
    this.notificationService.success('Plan "' + plan.title + '" has been deleted.', 'Plan Successfully Deleted');

    this.treatmentPlans = this.treatmentPlans.filter(x => x.title !== plan.title);

    this.dbService.treatmentRef.doc(plan.title).delete();

  }
  getTreatmentPlans(): TreatmentPlanModel[]{
    return this.treatmentPlans.slice();
  }

  editPlan(newModel: TreatmentPlanModel, oldTitle: string): void {
    this.treatmentPlans[this.treatmentPlans.findIndex(plan => plan.title === oldTitle)] = newModel;
  }

  // Add plan function
  addPlan(plan: TreatmentPlanModel): void {

    const riskTitle = plan.riskProfile;
    // const riskTitle = [plan.riskProfile];
    const tasksArr = [];

    // use below code to retrieve tasks
    plan.tasks.forEach((task) => {
      tasksArr.push(task);
    });


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
    };

    // Inserts new Treatment Plan object into database
    this.dbService.treatmentRef.doc(plan.title).set(planConst);

    // Display success popup after inserting into database
    this.notificationService.success('Plan "' + plan.title + '" has been added.', 'Treatment Plan Successfully Created');

  }

}
