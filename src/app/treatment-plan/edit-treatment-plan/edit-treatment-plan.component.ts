import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {TreatmentPlanModel} from '../treatment-plan.model';

@Component({
  selector: 'app-edit-treatment-plan',
  templateUrl: './edit-treatment-plan.component.html',
  styleUrls: ['./edit-treatment-plan.component.css']
})
export class EditTreatmentPlanComponent implements OnInit {

  constructor(public modalService: NgbModal) {
  }
  @Input() treatmentPlanItem: TreatmentPlanModel;
  public closeResult = "";

  // tslint:disable-next-line:typedef
  newTreatmentPlanForm: FormGroup;

  ngOnInit(): void {
    // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
    this.newTreatmentPlanForm = new FormGroup({
      taskTitle: new FormControl(this.treatmentPlanItem.title),
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

  editTreatmentPlan() {

  }
}
