import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {TreatmentPlanModel} from '../treatment-plan.model';
import {TaskModel} from '../../task-list/task.model';
import {TreatmentPlanService} from '../treatment-plan.service';
import {UsersService} from '../../users.service';
import {DbService} from '../../db.service';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {TaskService} from '../../task-list/task-service';
import {RiskProfileModel} from '../../risk-profile/risk-profile.model';

@Component({
  selector: 'app-edit-treatment-plan',
  templateUrl: './edit-treatment-plan.component.html',
  styleUrls: ['./edit-treatment-plan.component.css']
})
export class EditTreatmentPlanComponent implements OnInit {

  constructor(public modalService: NgbModal, public treatmentPlanService: TreatmentPlanService, public dbService: DbService, public riskProfileService: RiskProfileService, public taskService: TaskService) {
  }
  @Input() treatmentPlanItem: TreatmentPlanModel;
  public closeResult = "";

  // tslint:disable-next-line:typedef
  newTreatmentPlanForm: FormGroup;

  ngOnInit(): void {
    // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
    this.newTreatmentPlanForm = new FormGroup({
      taskTitle: new FormControl(this.treatmentPlanItem.title),
      riskProfile: new FormControl(this.treatmentPlanItem.riskProfile.title),
      addTasks: new FormControl(this.treatmentPlanItem.tasks),
    });
  }
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

  editTreatmentPlan(): void {

    this.treatmentPlanItem.riskProfile.title = this.newTreatmentPlanForm.value.riskProfile;

    const newPlan =  new TreatmentPlanModel (
        this.treatmentPlanItem.riskProfile,
        this.newTreatmentPlanForm.value.addTasks,
        this.newTreatmentPlanForm.value.taskTitle,
    );

    this.treatmentPlanService.editPlan(newPlan, this.treatmentPlanItem.title);

    this.dbService.treatmentRef.doc(this.treatmentPlanItem.title).delete();

    let newProfile = this.riskProfileService.getRiskProfileByTitle(this.treatmentPlanItem.riskProfile.title);
    console.log("NEW PROFILE");
    console.log(newProfile);

    const riskConst = {
      id: newProfile.id,
      title: this.treatmentPlanItem.riskProfile.title,
      description: newProfile.description,
      likelihood: newProfile.likelihood,
      impact: newProfile.impact,
      category: null,
      riskCategory: null,
      sourceOfRisk: newProfile.sourceOfRisk,
    };

    // TODO: Note - task's title is being used as ID - not too great
    this.dbService.treatmentRef.doc(newPlan.title).set({
      title: newPlan.title,
      tasks: newPlan.tasks,
      riskProfile: riskConst
    });

    this.modalService.dismissAll();

    console.log(newPlan.title);

  }
}
