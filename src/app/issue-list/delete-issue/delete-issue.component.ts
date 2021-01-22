import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {IssueService} from '../issue.service';
import {IssueModel} from '../issue.model';

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

  issue: IssueModel = new IssueModel(0, 'cvbcv', 'cvbcvb', 'asd', 'asd', 12345678, 'asd', 0, 0);

  constructor( private modalService: NgbModal, private issueService: IssueService ) {}

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
    this.issueService.deleteIssue(this.issue);
    this.modalService.dismissAll();
  }

}
