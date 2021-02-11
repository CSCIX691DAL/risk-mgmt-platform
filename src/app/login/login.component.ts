import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {DbService} from '../db.service';
import {TaskService} from '../task-list/task-service';
import {IssueService} from '../issue-list/issue.service';
import {CategoryService} from '../risk-categories/category.service';
import {RiskProfileService} from '../risk-profile/risk-profile.service';
import {OrganizationService} from '../organization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public userAuthService: UserAuthService, private router: Router, public fireAuth: AngularFireAuth, public dbService: DbService, public taskService: TaskService, public issueService: IssueService, public categoryService: CategoryService, public profileService: RiskProfileService, public organizationService: OrganizationService) { }

  loginEmail = new FormControl('');
  loginPassword = new FormControl('');

  loginFailed = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userAuthService.fireAuth.signInWithEmailAndPassword(this.loginEmail.value, this.loginPassword.value).then(result => {
      this.loginFailed = false;

      this.organizationService.updateOrg(result.user.email);
      // These are used to sync the user's items with their specific organization.
    }).catch(error => {
      this.loginFailed = true;
    });
  }

}
