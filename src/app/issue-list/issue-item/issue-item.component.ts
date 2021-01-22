import {Component, Input, OnInit} from '@angular/core';
import {IssueModel} from '../issue.model';
import {IssueService} from '../issue.service';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})

export class IssueItemComponent implements OnInit {

  @Input() issueItem: IssueModel;

  constructor( private issueService: IssueService ) { }

  ngOnInit(): void {}

  // Delete issue function : Relies on deleteIssue() from issue.service.ts
  onDeleteIssue(): void {
    this.issueService.deleteIssue(this.issueItem);
  }

}
