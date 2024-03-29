import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IssueService} from '../issue.service';
import {IssueModel} from '../issue.model';
import {CategoryService} from '../../risk-categories/category.service';
import {DbService} from '../../db.service';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})

export class EditIssueComponent implements OnInit {

  @Input() editTextName: string;
  @Input() editModalTitle: string;
  @Input() editModalRiskCategory: string;
  @Input() editModalAssignee: string;
  @Input() editModalID: number;
  @Input() editModalDescription: string;
  @Input() editIssue: IssueModel;

  closeResult = '';

  issue: IssueModel = new IssueModel(0, 'cvbcv', 'cvbcvb', 12345678, 'asd', '', '');

  constructor(
    private modalService: NgbModal,
    private issueService: IssueService,
    public categoryService: CategoryService,
    public userService: UsersService,
    public dbService: DbService) {}

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
    this.dbService.issueRef.doc(this.editModalTitle).delete();

    this.issueService.editIssue(this.issue);

    this.dbService.issueRef.doc(this.issue.title).set({
      id: this.issue.id,
      title: this.issue.title,
      description: this.issue.description,
      modifiedBy: this.issue.modifiedBy,
      riskCategory: this.issue.riskCategory,
      assignee: this.issue.assignee,
      parentIssue: this.issue.parentIssue
    });

    this.modalService.dismissAll();
  }

}
