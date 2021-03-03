import {Component, Input, OnInit} from '@angular/core';
import {IssueModel} from '../../issue-list/issue.model';
import {TaskModel} from '../../task-list/task.model';
import {RiskProfileModel} from '../../risk-profile/risk-profile.model';
import {TreatmentPlanModel} from '../treatment-plan.model';
import {CategoryModel} from '../../risk-categories/category.model';
import {UsersModel} from '../../users.model';
import firebase from 'firebase';
import User = firebase.User;
import {IssueService} from '../../issue-list/issue.service';
import {CategoryService} from '../../risk-categories/category.service';
import {TaskService} from '../../task-list/task-service';
import {TreatmentPlanService} from '../treatment-plan.service';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-add-treatment-plan',
  templateUrl: './add-treatment-plan.component.html',
  styleUrls: ['./add-treatment-plan.component.css']
})
export class AddTreatmentPlanComponent implements OnInit {
  @Input() addTitle: string;
  @Input() addRisks: RiskProfileModel;
  @Input() addCategories: CategoryModel;
  @Input() addTasks: Array<TaskModel>;
  @Input() addUsers: UsersModel;

  users: UsersModel = new UsersModel('1', 'bryson', 'sf', '11/08/1999', '07/01/2021', 'Yes');
  tasks: TaskModel = new TaskModel('Title', this.users, 'Active', '31/12/2020', 'Jan 15/2020', 'No');
  riskProfiles: RiskProfileModel = new RiskProfileModel(1, 'Title', 'description text', 5, 5, this.addCategories, 'words', "risk source");
  treatmentPlans: TreatmentPlanModel = new TreatmentPlanModel(this.riskProfiles, [this.tasks], 'Title');
  constructor(private taskService: TaskService,
              public categoryService: CategoryService,
              private treatmentPlanService: TreatmentPlanService,
              public dbService: DbService) { }

  ngOnInit(): void {

  }
// Add issue function
  OnAdd(): void {
    if (this.treatmentPlans.title) {
      this.treatmentPlanService.addPlan(this.treatmentPlans);

      this.dbService.issueRef.doc(this.treatmentPlans.title).set({
        title: this.treatmentPlans.title,
        tasks: this.treatmentPlans.tasks,
        riskProfile: this.treatmentPlans.riskProfile,
      });
    }
  }

}
