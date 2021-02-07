import {Component, Input, OnInit} from '@angular/core';
import {IssueModel} from '../issue.model';
import {IssueService} from '../issue.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../../risk-categories/category.service';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})

export class AddIssueComponent implements OnInit {

  @Input() addTextName: string;
  @Input() addModalID: number;
  @Input() addModalTitle: string;
  @Input() addModalDescription: string;
  @Input() addIssue: IssueModel;

  closeResult = '';

  issue: IssueModel = new IssueModel(0, 'cvb', 'cvbcvb',  12345678, 'asd', 0, 0);

  constructor(
    private modalService: NgbModal,
    private issueService: IssueService,
    public categoryService: CategoryService,
    public dbService: DbService) {

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.issue.id = this.addModalID;
    this.issue.title = this.addModalTitle;
    this.issue.description = this.addModalDescription;
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

  // Add issue function
  OnAdd(): void {
    this.issueService.addIssue(this.issue);

    this.dbService.issueRef.doc(this.issue.title).set({
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
