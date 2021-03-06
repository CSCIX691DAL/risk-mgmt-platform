import { Injectable } from '@angular/core';
import {DbService} from './db.service';
import {TaskService} from './task-list/task-service';
import {IssueService} from './issue-list/issue.service';
import {CategoryService} from './risk-categories/category.service';
import {RiskProfileService} from './risk-profile/risk-profile.service';
import {Router} from '@angular/router';
import {UsersService} from './users.service';
import {UserAuthService} from './user-auth.service';
import {OrganizationModel} from './organization.model';
import {TaskModel} from './task-list/task.model';
import {RiskProfileModel} from './risk-profile/risk-profile.model';
import {CategoryModel} from './risk-categories/category.model';
import {IssueModel} from './issue-list/issue.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(public dbService: DbService, public taskService: TaskService, public issueService: IssueService, public categoryService: CategoryService, public profileService: RiskProfileService, public userService: UsersService, public router: Router) {
    this.getAllOrgs();
  }

  // This refers to the ID of the document within the organizations collection; this should change when user selects a different org
  public currentOrganization;

  public userOrganizations;

  public organizations: OrganizationModel[] = [];
  public currentlySelectedOrg: OrganizationModel;

  public changeCurrentOrg(orgName: string) {
    this.currentOrganization = orgName;

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

    this.getOrgModelByID(this.currentOrganization).then((org) => {
      this.currentlySelectedOrg = org;
    });
  }

  public async getOrgModelByID(orgName: string): Promise<OrganizationModel> {
    let orgModel: OrganizationModel = null;

    await this.dbService.organizationRef.get().then((document) => {
      document.forEach(org => {
        const orgData = org.data();

        console.log(orgData);
        console.log(this.currentOrganization);

        if (orgData.name === this.currentOrganization) {
          orgModel = new OrganizationModel(orgData.name, 'Inactive');
        }
      });
    });

    console.log(orgModel);
    return orgModel;
  }

  public async getOrgUserCount(orgName): Promise<number> {
    let i = 0;
    await this.dbService.organizationRef.doc(orgName).collection('users').get().then((doc) => {
      i =  doc.size;
    });

    return i;
  }

  public async getAllOrgsCount(): Promise<number> {
    let i = 0;
    await this.dbService.organizationRef.get().then((document) => {
      i =  document.size;
    });

    return i;
  }

  public async getAllUsersCount(): Promise<number> {
    let i = 0;
    await this.dbService.userRef.get().then((document) => {
      i =  document.size;
    });

    return i;
  }

  public async getOrgAllTasks(orgName): Promise<number> {
    let i = 0;
    await this.dbService.organizationRef.doc(orgName).collection('tasks').get().then((doc) => {
      i =  doc.size;
    });

    return i;
  }

  public async getAllIssuesByOrg(orgName): Promise<IssueModel[]> {
    const issues = [];

    await this.dbService.organizationRef.doc(orgName).collection('issues').get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        const newIssue = doc.data();
        issues.push(new IssueModel(newIssue.id, newIssue.title, newIssue.description, newIssue.modifiedBy, newIssue.riskCategory, newIssue.assigneee, newIssue.parentIssue));
      });

    });

    return issues;
  }

  public async getAllCategoriesByOrgReal(orgName): Promise<CategoryModel[]> {
    const categories = [];

    await this.dbService.organizationRef.doc(orgName).collection('categories').get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        const newCategory = doc.data();

        categories.push(new CategoryModel(newCategory.id, newCategory.name, categories[Number(newCategory.parentCategory - 1)], newCategory.description, newCategory.isSpeculativeRisk));
      });

    });

    return categories;
  }

  public async getAllCategoriesByOrg(orgName): Promise<CategoryModel[]> {
    const categories = [];

    await this.dbService.organizationRef.doc(orgName).collection('categories').get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        const newCategory = doc.data();

        categories.push(new CategoryModel(newCategory.id, newCategory.name, categories[Number(newCategory.parentCategory - 1)], newCategory.description, newCategory.isSpeculativeRisk));
      });

    });

    return categories;
  }

  public async getUserName(email): Promise<string> {
    let userName = '';

    await this.dbService.userRef.doc(email).get().then((user) => {
      userName = user.data().name;

      console.log(userName);
    });

    return userName;
  }

  public async getAllProfilesByOrgReal(orgName): Promise<RiskProfileModel[]> {
    const profiles = [];

    let categories = [];

    await this.getAllCategoriesByOrgReal(orgName).then((categoryArr) => {
      categories = categoryArr;

      this.dbService.organizationRef.doc(orgName).collection('riskProfiles').get().then((querySnapshot) => {

        querySnapshot.forEach((doc) => {
          const newRiskProfile = doc.data();

          profiles.push(new RiskProfileModel(newRiskProfile.id, newRiskProfile.title, newRiskProfile.description, newRiskProfile.likelihood, newRiskProfile.impact, categories[newRiskProfile.category], categories[newRiskProfile.riskCategory], newRiskProfile.sourceOfRisk));
        });

      });

    });

    return profiles;
  }

  public async getAllProfilesByOrg(orgName): Promise<RiskProfileModel[]> {
    const profiles = [];

    await this.dbService.organizationRef.doc(orgName).collection('riskProfiles').get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        const newRiskProfile = doc.data();

        profiles.push(new RiskProfileModel(newRiskProfile.id, newRiskProfile.title, newRiskProfile.description, newRiskProfile.likelihood, newRiskProfile.impact, null, null, newRiskProfile.sourceOfRisk));
      });

    });

    return profiles;
  }

  public async getAllTasksByOrg(orgName): Promise<TaskModel[]> {
    const tasks = [];

    await this.dbService.organizationRef.doc(orgName).collection('tasks').get().then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        const newTask = doc.data();

        const createdDate = new Date(0);
        createdDate.setUTCSeconds(newTask.createdDate.seconds);

        const dueDate = new Date(0);
        dueDate.setUTCSeconds(newTask.dueDate.seconds);

        console.log(newTask.createdByID);

        this.getIndexOfUserByEmail(newTask.createdByID, this.currentlySelectedOrg.orgName).then((index) => {
          tasks.push(new TaskModel(newTask.title, this.userService.categories[index], newTask.status, dueDate, createdDate, false));
        });
      });
    });

    return tasks;
  }

  public async getIndexOfUserByEmail(email: string, orgName: string): Promise<number> {
    let i = 0;

    let userArr = [];

    return await this.userService.getUserArrayByOrg(orgName).then((result) => {
      userArr = result;


      for (const user of userArr) {
        if (user.id === email) {
          return i;
        }
        i++;
      }

      return -1;

    });

  }

  public async getUserTaskCount(orgName, userID): Promise<number> {
    let i = 0;
    await this.dbService.organizationRef.doc(orgName).collection('tasks').where('createdByID', '==', userID).get().then((doc) => {
      i =  doc.size;
    });

    return i;
  }

  public async getUserAllCompletedTasks(orgName, userID): Promise<number> {
    let i = 0;
    await this.dbService.organizationRef.doc(orgName).collection('tasks').where('createdByID', '==', userID).where('status', '==', 'Completed').get().then((doc) => {
      i =  doc.size;
    });

    return i;
  }

  public async getOrgAllCompletedTasks(orgName): Promise<number> {
    let i = 0;
    await this.dbService.organizationRef.doc(orgName).collection('tasks').where('status', '==', 'Completed').get().then((doc) => {
      i =  doc.size;
    });

    return i;
  }

  public getAllOrgs(): void {
    this.dbService.organizationRef.get().then((document) => {
      document.forEach(org => {
        const orgData = org.data();
        this.organizations.push(new OrganizationModel(orgData.name, 'Inactive'));
      });
    });
  }

  public updateOrg(email: string): void {
    console.log(email);
    this.dbService.userRef.doc(email).get().then((document) => {
      this.currentOrganization = document.data().organizations[0];

      this.userOrganizations = document.data().organizations;
      console.log(this.userOrganizations);

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


      this.getOrgModelByID(this.currentOrganization).then((org) => {
        this.currentlySelectedOrg = org;
      });

      this.router.navigate(['dashboard']);
    });
  }
}
