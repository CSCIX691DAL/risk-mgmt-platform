import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TreatmentPlanService} from '../treatment-plan.service';
import {TreatmentPlanModel} from '../treatment-plan.model';
import {DbService} from '../../db.service';
import {IssueService} from '../../issue-list/issue.service';
import {IssueModel} from '../../issue-list/issue.model';
import {RiskProfileModel} from '../../risk-profile/risk-profile.model';
import {TaskModel} from '../../task-list/task.model';

@Component({
  selector: 'app-delete-plan',
  templateUrl: './delete-plan.component.html',
  styleUrls: ['./delete-plan.component.css']
})

export class DeletePlanComponent implements OnInit {

  @Input() deleteTextName: string;
  @Input() deleteModalID: number;
  @Input() deleteModalTitle: string;
  @Input() deletePlan: TreatmentPlanModel;

  closeResult = '';
  plan: TreatmentPlanModel;

  constructor( private modalService: NgbModal, private treatmentPlanService: TreatmentPlanService, public dbService: DbService ) {
    this.plan = this.deletePlan;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void { }

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

  // Delete plan function
  OnDelete(): void {
    // Using the treatment plan title, delete the treatment plan from the database
    this.dbService.treatmentRef.doc(this.plan.title).delete();
    this.treatmentPlanService.deletePlan(this.plan);
    this.modalService.dismissAll();
  }

}
