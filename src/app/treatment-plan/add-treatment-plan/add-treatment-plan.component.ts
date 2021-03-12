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
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {fromCollectionRef} from '@angular/fire/firestore';

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

  closeResult = '';

  // might need to define category modely here aswellthis.id = id;
  //     this.name = name;
  //     this.parentCategory = parentCategory;
  //     this.description = description;
  //     this.isSpeculativeRisk = isSpeculativeRisk;
  categories: CategoryModel;
  users: UsersModel = new UsersModel('1', 'bryson', 'sf', '11/08/1999', '07/01/2021', true);
  tasks: TaskModel = new TaskModel('Title', this.users, 'Active', new Date('December 12/2020'), new Date('Jan 15/2020'), false);
  riskProfiles: RiskProfileModel;
  treatmentPlans: TreatmentPlanModel = new TreatmentPlanModel(null, null, 'Title', 0);
  constructor(private taskService: TaskService,
              public categoryService: CategoryService,
              private treatmentPlanService: TreatmentPlanService,
              public dbService: DbService, public modalService: NgbModal) {
    this.categories = new CategoryModel(1,  'name', this.addCategories , 'description',  false);
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    //below being set to each treatment plan
    this.riskProfiles = new RiskProfileModel(1, 'Title', 'description text', 5, 5, this.categories, this.categories, "risk source");
  }
// Add issue function
  OnAdd(): void {
    if (this.treatmentPlans.title) {

      this.treatmentPlans = new TreatmentPlanModel(this.treatmentPlans.riskProfile, this.treatmentPlans.tasks, this.treatmentPlans.title, this.treatmentPlans.id);

      this.treatmentPlanService.addPlan(this.treatmentPlans);


      // connect to risk profile subcollection
      this.dbService.treatmentRef.doc(this.treatmentPlans.title).collection('risk-profiles').add({
        riskProfile: this.treatmentPlans.riskProfile
      });
      // connect to tasks subcollection
      this.dbService.treatmentRef.doc(this.treatmentPlans.title).collection('tasks').add({
        tasks: this.treatmentPlans.tasks
      });
      // set below not working
      this.dbService.treatmentRef.doc(this.treatmentPlans.title).set({
        title: this.treatmentPlans.title,
        id: this.treatmentPlans.id
      });

    }
  }

}
