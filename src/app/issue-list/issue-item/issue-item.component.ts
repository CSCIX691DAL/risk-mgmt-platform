import {Component, Input, OnInit} from '@angular/core';
import {IssueModel} from '../issue.model';
import {IssueService} from '../issue.service';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})

export class IssueItemComponent implements OnInit {

  @Input() issueItem: IssueModel;

  constructor( private issueService: IssueService, public userService: UsersService ) { }

  ngOnInit(): void {}

  // Delete issue function : Relies on deleteIssue() from issue.service.ts
  onDeleteIssue(): void {
    console.log(this.issueItem);
    this.issueService.deleteIssue(this.issueItem);
  }

}
