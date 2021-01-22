import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IssueService} from '../issue.service';
import {IssueModel} from '../issue.model';
import {CategoryService} from '../../risk-categories/category.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})

export class EditIssueComponent implements OnInit {

  @Input() editTextName: string;
  @Input() editModalTitle: string;
  @Input() editModalRiskCategory: string;
  @Input() editModalAssignee: number;
  @Input() editModalID: number;
  @Input() editModalDescription: string;
  @Input() editIssue: IssueModel;

  closeResult = '';

  issue: IssueModel = new IssueModel(0, 'cvbcv', 'cvbcvb', 'asd', 'asd', 12345678, 'asd', 0, 0);

  constructor(
    private modalService: NgbModal,
    private issueService: IssueService,
    public categoryService: CategoryService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.issue.title = this.editModalTitle;
    this.issue.riskCategory = this.editModalRiskCategory;
    this.issue.assignee = this.editModalAssignee;
    this.issue.description = this.editModalDescription;
    this.issue.id = this.editModalID;
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

  // Edit issue function
  OnEdit(): void {
    this.issueService.editIssue(this.issue);
    this.modalService.dismissAll();
  }

}
