import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../issue-list/issue.service';

@Component({
  selector: 'app-issue-widget',
  templateUrl: './issue-widget.component.html',
  styleUrls: ['./issue-widget.component.css']
})
export class IssueWidgetComponent implements OnInit {

  constructor(public issueService: IssueService) { }

  ngOnInit(): void {}

  public getParentIssueCount(): number {
    return this.issueService.countParentIssues();
  }

  public getChildIssueCount(): number {
    return this.issueService.countChildIssues();
  }

}
