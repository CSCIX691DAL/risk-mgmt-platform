import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IssueService} from '../issue.service';
import {IssueModel} from '../issue.model';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-delete-issue',
  templateUrl: './delete-issue.component.html',
  styleUrls: ['./delete-issue.component.css']
})
export class DeleteIssueComponent implements OnInit {

  @Input() deleteTextName: string;
  @Input() deleteModalID: number;
  @Input() deleteModalTitle: string;
  @Input() deleteIssue: IssueModel;

  closeResult = '';

  issue: IssueModel = new IssueModel(0, 'cvbcv', 'cvbcvb', 12345678, 'asd', '', '');

  constructor( private modalService: NgbModal, private issueService: IssueService, public dbService: DbService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.issue.id = this.deleteModalID;
    this.issue.title = this.deleteModalTitle;
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

  // Delete issue function
  OnDelete(): void {
    console.log(this.issue);

    this.dbService.issueRef.doc(this.issue.title).delete();

    this.issueService.deleteIssue(this.issue);

    this.modalService.dismissAll();
  }

}
