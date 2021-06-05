import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { RiskCategoriesComponent } from './risk-categories/risk-categories.component';
import { FormsModule } from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueItemComponent } from './issue-list/issue-item/issue-item.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';
import { RiskProfileItemComponent } from './risk-profile/risk-profile-item/risk-profile-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import { TaskService } from './task-list/task-service';
import { CreateNewTaskComponent } from './task-list/create-new-task/create-new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { AddIssueComponent } from './issue-list/add-issue/add-issue.component';
import { EditIssueComponent } from './issue-list/edit-issue/edit-issue.component';
import { DeleteIssueComponent } from './issue-list/delete-issue/delete-issue.component';
import { CategoryItemComponent } from './risk-categories/category-item/category-item.component';
import { EditCategoryComponent } from './risk-categories/edit-category/edit-category.component';
import { AddCategoryComponent } from './risk-categories/add-category/add-category.component';
import { AddRiskProfileComponent } from './risk-profile/add-risk-profile/add-risk-profile.component';
import { DeleteRiskProfileComponent } from './risk-profile/delete-risk-profile/delete-risk-profile.component';
import { EditRiskProfileComponent } from './risk-profile/edit-risk-profile/edit-risk-profile.component';
import { SortIssueComponent } from './issue-list/sort-issue/sort-issue.component';
import { SortCategoryComponent } from './risk-categories/sort-category/sort-category.component';
import { SortProfileComponent } from './risk-profile/sort-profile/sort-profile.component';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartSummaryComponent } from './dashboard/chart-summary/chart-summary.component';
import { IssueWidgetComponent } from './widgets/issue-widget/issue-widget.component';
import { ProfileWidgetComponent } from './widgets/profile-widget/profile-widget.component';
import { CategoryWidgetComponent } from './widgets/category-widget/category-widget.component';
import { TaskWidgetComponent } from './widgets/task-widget/task-widget.component';
import { RiskResponseMatrixComponent } from './risk-response-matrix/risk-response-matrix.component';
import { RiskProfileMapComponent } from './risk-profile/risk-report-map/risk-profile-map.component';
import { IssueSurvey } from './issue-survey/issue-survey';
import { NameEditorComponent } from './issue-survey/name-editor/name-editor.component';
import { ProfileEditorComponent } from './issue-survey/profile-editor/profile-editor.component';
import { ShortAnswerEditorComponent } from './issue-survey/short-answer-editor/short-answer-editor.component';
import { LongAnswerEditorComponent } from './issue-survey/long-answer-editor/long-answer-editor.component';
import { DropdownEditorComponent } from './issue-survey/dropdown-editor/dropdown-editor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {DbService} from './db.service';
import { TreatmentPlanComponent } from './treatment-plan/treatment-plan.component';
import { AdminNavComponent } from './admin-dash/admin-nav/admin-nav.component';
import { UserListComponent } from './admin-dash/user-list/user-list.component';
import { OrgsListComponent } from './admin-dash/orgs-list/orgs-list.component';
import { OrgsListItemComponent } from './admin-dash/orgs-list/orgs-list-item/orgs-list-item.component';
import { UserListItemComponent } from './admin-dash/user-list/user-list-item/user-list-item.component';
import { AdminHomeComponent } from './admin-dash/admin-home/admin-home.component';
import { UserProfileWidgetComponent } from './admin-dash/admin-home/user-profile-widget/user-profile-widget.component';
import { AssignedTasksComponent } from './admin-dash/admin-home/assigned-tasks/assigned-tasks.component';
import {UserAuthService} from './user-auth.service';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { PolicyComponent } from './policy/policy.component';
import { PolicyItemComponent } from './policy/policy-item/policy-item.component';
import { EditPolicyComponent } from './policy/edit-policy/edit-policy.component';
import { DeletePolicyComponent } from './policy/delete-policy/delete-policy.component';
import { AddPolicyComponent } from './policy/add-policy/add-policy.component';
import { NewTasklistComponent } from './new-tasklist/new-tasklist.component';
import { NewTaskItemComponent } from './newTasklist/new-task-item/new-task-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { AddTreatmentPlanComponent } from './treatment-plan/add-treatment-plan/add-treatment-plan.component';
import { TreatmentPlanItemComponent } from './treatment-plan/treatment-plan-item/treatment-plan-item.component';
import { EditTreatmentPlanComponent } from './treatment-plan/edit-treatment-plan/edit-treatment-plan.component';
import { SortTasksComponent } from './task-list/sort-tasks/sort-tasks.component';
import { OrgApprovalComponent } from './admin-dash/org-approval/org-approval.component';
import { OrgApprovalItemComponent } from './admin-dash/org-approval/org-approval-item/org-approval-item.component';
import { OrgsViewComponent } from './admin-dash/orgs-view/orgs-view.component';
import { OrgUsersComponent } from './admin-dash/orgs-list/org-users/org-users.component';
import { OrgUsersItemComponent } from './admin-dash/orgs-list/org-users/org-users-item/org-users-item.component';
import { OrgRiskCategoriesComponent } from './admin-dash/orgs-view/org-risk-categories/org-risk-categories.component';
import { OrgRiskCategoriesItemComponent } from './admin-dash/orgs-view/org-risk-categories/org-risk-categories-item/org-risk-categories-item.component';
import { OrgRiskProfilesComponent } from './admin-dash/orgs-view/org-risk-profiles/org-risk-profiles.component';
import { OrgRiskProfilesItemComponent } from './admin-dash/orgs-view/org-risk-profiles/org-risk-profiles-item/org-risk-profiles-item.component';
import { OrgRiskIssuesComponent } from './admin-dash/orgs-view/org-risk-issues/org-risk-issues.component';
import { OrgRiskIssuesItemComponent } from './admin-dash/orgs-view/org-risk-issues/org-risk-issues-item/org-risk-issues-item.component';
import { OrgTasksComponent } from './admin-dash/orgs-view/org-tasks/org-tasks.component';
import { OrgTasksItemComponent } from './admin-dash/orgs-view/org-tasks/org-tasks-item/org-tasks-item.component';
import { OrgsAddUserComponent } from './admin-dash/orgs-view/orgs-add-user/orgs-add-user.component';
import { OrgAdminDashComponent } from './org-admin-dash/org-admin-dash.component';
import { OrgAdminNavComponent } from './org-admin-dash/org-admin-nav/org-admin-nav.component';
import { OrgAdminHomeComponent } from './org-admin-dash/org-admin-home/org-admin-home.component';
import { OrgAdminApprovalComponent } from './org-admin-dash/org-admin-approval/org-admin-approval.component';
import { OrgAdminUserListComponent } from './org-admin-dash/org-admin-user-list/org-admin-user-list.component';
import { OrgAdminOrgViewComponent } from './org-admin-dash/org-admin-org-view/org-admin-org-view.component';
import { OrgAdminApprovalItemComponent } from './org-admin-dash/org-admin-approval/org-admin-approval-item/org-admin-approval-item.component';
import { OrgAdminUserListItemComponent } from './org-admin-dash/org-admin-user-list/org-admin-user-list-item/org-admin-user-list-item.component';
import { AboutComponent } from './landing/information/about/about.component';
import { HelpComponent } from './landing/information/help/help.component';
import { TeamComponent } from './landing/information/team/team.component';
import { TeamF20Component } from './landing/information/team/team-f20/team-f20.component';
import { TeamW21Component } from './landing/information/team/team-w21/team-w21.component';
import { TeamS21Component } from './landing/information/team/team-s21/team-s21.component';
import { CommonModule } from '@angular/common';
import {DeletePlanComponent} from './treatment-plan/delete-plan/delete-plan.component';
import { FeaturesComponent } from './landing/features/features.component';
import { ProgressComponent } from './landing/features/progress/progress.component';
import { TrackingComponent } from './landing/features/tracking/tracking.component';
import { DeliveryComponent } from './landing/features/delivery/delivery.component';


// https://github.com/angular/angularfire/blob/master/docs/auth/router-guards.md
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const myroutes: Routes = [
  {path: '' , component : LandingComponent},
  {path: 'about' , component : AboutComponent},
  {path: 'team' , component : TeamW21Component},
  {path: 'team-fall-2020' , component : TeamF20Component},
  {path: 'team-winter-2021' , component : TeamW21Component},
  {path: 'team-summer-2021' , component : TeamS21Component},
  {path: 'feature-productivity' , component : ProgressComponent},
  {path: 'feature-track-progress' , component : TrackingComponent},
  {path: 'feature-deliver-results' , component : DeliveryComponent},
  {path: 'help' , component : HelpComponent},
  {path: 'dashboard' , component : DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'categories' , component : RiskCategoriesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'issues' , component : IssueListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'profile' , component : RiskProfileComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'create-task', component: CreateNewTaskComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'edit-task', component: EditTaskComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'tasks', component: NewTasklistComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'surveys', component: IssueSurvey, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'policy', component: PolicyComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'admin-dashboard', component: AdminDashComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'admin-dashboard', component: AdminDashComponent},
  {path: 'treatment-plan', component: TreatmentPlanComponent},
  {path: 'admin-dashboard', component: AdminDashComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'admin-dashboard-users', component: UserListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'admin-dashboard-organizations', component: OrgsListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'admin-dashboard-approval', component: OrgApprovalComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'admin-organization-view', component: OrgsViewComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'org-admin-dashboard', component: OrgAdminDashComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'org-admin-dashboard-users', component: OrgAdminUserListComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'org-admin-dashboard-approval', component: OrgAdminApprovalComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'org-admin-organization-view', component: OrgAdminOrgViewComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'risk-matrix', component: RiskResponseMatrixComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'risk-map', component: RiskProfileMapComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    RiskCategoriesComponent,
    IssueListComponent,
    IssueItemComponent,
    RiskCategoriesComponent,
    RiskProfileComponent,
    TasksSummaryComponent,
    RiskProfileItemComponent,
    TaskListComponent,
    TaskItemComponent,
    CreateNewTaskComponent,
    EditTaskComponent,
    TasksSummaryComponent,
    ModalComponent,
    TasksSummaryComponent,
    AddIssueComponent,
    EditIssueComponent,
    DeleteIssueComponent,
    CategoryItemComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    AddRiskProfileComponent,
    DeleteRiskProfileComponent,
    EditRiskProfileComponent,
    SortIssueComponent,
    SortCategoryComponent,
    SortProfileComponent,
    FilterByCategoryPipe,
    DashboardComponent,
    ChartSummaryComponent,
    IssueWidgetComponent,
    ProfileWidgetComponent,
    CategoryWidgetComponent,
    TaskWidgetComponent,
    RiskResponseMatrixComponent,
    RiskProfileMapComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    IssueSurvey,
    ShortAnswerEditorComponent,
    LongAnswerEditorComponent,
    DropdownEditorComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    ForgotPasswordComponent,
    AdminDashComponent,
    TreatmentPlanComponent,
    AdminNavComponent,
    UserListComponent,
    OrgsListComponent,
    OrgsListItemComponent,
    UserListItemComponent,
    AdminHomeComponent,
    UserProfileWidgetComponent,
    AssignedTasksComponent,
    PolicyComponent,
    PolicyItemComponent,
    EditPolicyComponent,
    DeletePolicyComponent,
    AddPolicyComponent,
    NewTasklistComponent,
    NewTaskItemComponent,
    TreatmentPlanComponent,
    AddTreatmentPlanComponent,
    TreatmentPlanItemComponent,
    EditTreatmentPlanComponent,
    SortTasksComponent,
    OrgApprovalComponent,
    OrgApprovalItemComponent,
    OrgsViewComponent,
    OrgUsersComponent,
    OrgUsersItemComponent,
    OrgRiskCategoriesComponent,
    OrgRiskCategoriesItemComponent,
    OrgRiskProfilesComponent,
    OrgRiskProfilesItemComponent,
    OrgRiskIssuesComponent,
    OrgRiskIssuesItemComponent,
    OrgTasksComponent,
    OrgTasksItemComponent,
    OrgsAddUserComponent,
    OrgAdminDashComponent,
    OrgAdminNavComponent,
    OrgAdminHomeComponent,
    OrgAdminApprovalComponent,
    OrgAdminUserListComponent,
    OrgAdminOrgViewComponent,
    OrgAdminApprovalItemComponent,
    OrgAdminUserListItemComponent,
    AboutComponent,
    HelpComponent,
    TeamComponent,
    TeamF20Component,
    TeamW21Component,
    DeletePlanComponent,
    FeaturesComponent,
    ProgressComponent,
    TrackingComponent,
    DeliveryComponent,
    TeamS21Component,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    Ng2SearchPipeModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot({
      timeOut: 3450,
      closeButton: true
    })
  ],
  providers: [UserAuthService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
