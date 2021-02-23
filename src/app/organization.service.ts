import { Injectable } from '@angular/core';
import {DbService} from './db.service';
import {TaskService} from './task-list/task-service';
import {IssueService} from './issue-list/issue.service';
import {CategoryService} from './risk-categories/category.service';
import {RiskProfileService} from './risk-profile/risk-profile.service';
import {Router} from '@angular/router';
import {UsersService} from './users.service';
import {UserAuthService} from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(public dbService: DbService, public taskService: TaskService, public issueService: IssueService, public categoryService: CategoryService, public profileService: RiskProfileService, public userService: UsersService, public router: Router) {
  }

  // This refers to the ID of the document within the organizations collection; this should change when user selects a different org
  public currentOrganization;

  public updateOrg(email: string): void {
    console.log(email);
    this.dbService.userRef.doc(email).get().then((document) => {
      this.currentOrganization = document.data().organizations[0];

      this.dbService.taskRef = this.dbService.organizationRef.doc(this.currentOrganization).collection('tasks');
      this.dbService.issueRef = this.dbService.organizationRef.doc(this.currentOrganization).collection(`issues`);
      this.dbService.riskProfileRef = this.dbService.organizationRef.doc(this.currentOrganization).collection('riskProfiles');
      this.dbService.categoryRef = this.dbService.organizationRef.doc(this.currentOrganization).collection('categories');
      this.userService.userCurrentOrg = this.currentOrganization;
      this.userService.updateUserArray();
      this.taskService.updateTaskArray();
      this.issueService.updateIssueArray();
      this.categoryService.updateCategoryArray();
      this.profileService.updateRiskProfileArray();

      this.router.navigate(['dashboard']);
    });
  }
}
