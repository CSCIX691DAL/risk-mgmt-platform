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

  plan: TreatmentPlanModel = new TreatmentPlanModel(
      new RiskProfileModel(1, 'title', null, null, null, null, null, null),
      [new TaskModel('Title', null, 'complete', null, null, false)], 'cvbcvb', 12345678);


  constructor( private modalService: NgbModal, private treatmentPlanService: TreatmentPlanService, public dbService: DbService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.plan.id = this.deleteModalID;
    this.plan.title = this.deleteModalTitle;
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

  // Delete plan function
  OnDelete(): void {
    console.log(this.plan);

    this.dbService.issueRef.doc(this.plan.title).delete();

    this.treatmentPlanService.deletePlan(this.plan);

    this.modalService.dismissAll();
  }

}
