import { Component, Input, OnInit } from '@angular/core';
import { IssueModel } from '../../issue-list/issue.model';
import { TaskModel } from '../../task-list/task.model';
import { RiskProfileModel } from '../../risk-profile/risk-profile.model';
import { TreatmentPlanModel } from '../treatment-plan.model';
import { CategoryModel } from '../../risk-categories/category.model';
import { UsersModel } from '../../users.model';
import firebase from 'firebase';
import User = firebase.User;
import { IssueService } from '../../issue-list/issue.service';
import { CategoryService } from '../../risk-categories/category.service';
import { TaskService } from '../../task-list/task-service';
import { TreatmentPlanService } from '../treatment-plan.service';
import { DbService } from '../../db.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { fromCollectionRef } from '@angular/fire/firestore';
import { RiskProfileService } from '../../risk-profile/risk-profile.service';
import { FormControl, FormGroup } from '@angular/forms';
import { PolicyModel } from '../../policy/policy.model';

@Component({
  selector: 'app-add-treatment-plan',
  templateUrl: './add-treatment-plan.component.html',
  styleUrls: ['./add-treatment-plan.component.css']
})

export class AddTreatmentPlanComponent implements OnInit {

  closeResult = '';

  categories: CategoryModel;
  users: UsersModel = new UsersModel('1', 'bryson', 'sf', '11/08/1999', '07/01/2021', true);
  tasks: TaskModel = new TaskModel('Title', this.users, 'Active', new Date('December 12/2020'), new Date('Jan 15/2020'), false);
  riskProfile: RiskProfileModel;
  treatmentPlans: TreatmentPlanModel = new TreatmentPlanModel(null, null, 'Title');

  constructor(
      public taskService: TaskService,
      public categoryService: CategoryService,
      private treatmentPlanService: TreatmentPlanService,
      public riskProfileService: RiskProfileService,
      public dbService: DbService, public modalService: NgbModal
  )
  { }

  newPlanForm = new FormGroup({
    planTitle: new FormControl(''),
    riskProfile: new FormControl(''),
    addTasks: new FormControl(''),
  });

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

  ngOnInit(): void { }

  onAdd(): void {
    const newPlan = new TreatmentPlanModel(
        this.newPlanForm.value.riskProfile,
        this.newPlanForm.value.addTasks,
        this.newPlanForm.value.planTitle
    );

    this.treatmentPlanService.addPlan(newPlan);

    this.modalService.dismissAll();
  }

}
