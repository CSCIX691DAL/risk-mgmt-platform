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
import {RiskProfileComponent} from './risk-profile/risk-profile.component';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';
import { RiskProfileItemComponent } from './risk-profile/risk-profile-item/risk-profile-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';
import {TaskService} from './task-list/task-service';
import { CreateNewTaskComponent } from './task-list/create-new-task/create-new-task.component';
import {ReactiveFormsModule} from '@angular/forms';
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
import {RiskResponseMatrixComponent} from './risk-response-matrix/risk-response-matrix.component';
import {RiskProfileMapComponent} from './risk-profile/risk-report-map/risk-profile-map.component';
import { IssueSurvey } from './issue-survey/issue-survey';
import { NameEditorComponent } from './issue-survey/name-editor/name-editor.component';
import { ProfileEditorComponent } from './issue-survey/profile-editor/profile-editor.component';
import {ShortAnswerEditorComponent} from './issue-survey/short-answer-editor/short-answer-editor.component';
import {LongAnswerEditorComponent} from './issue-survey/long-answer-editor/long-answer-editor.component';
import {DropdownEditorComponent} from './issue-survey/dropdown-editor/dropdown-editor.component';
import { LoginComponent } from './login/login.component';


const myroutes: Routes = [
  {path: '' , component : DashboardComponent},
  {path: 'categories' , component : RiskCategoriesComponent},
  {path: 'issues' , component : IssueListComponent},
  {path: 'profile' , component : RiskProfileComponent},
  {path: 'create-task', component: CreateNewTaskComponent},
  {path: 'edit-task', component: EditTaskComponent},
  {path: 'tasks', component: TaskListComponent},
  {path: 'surveys', component: IssueSurvey},
  {path: 'login', component: LoginComponent}
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    Ng2SearchPipeModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
