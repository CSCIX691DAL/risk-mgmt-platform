import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue-list/issue.service';

@Component({
  selector: 'app-issue-widget',
  templateUrl: './issue-widget.component.html',
  styleUrls: ['./issue-widget.component.css']
})
export class IssueWidgetComponent implements OnInit {

  constructor(public issueService: IssueService) { }

  ngOnInit(): void { }

  // Returns count of Parent risk issues from issueService
  public getParentIssueCount(): number {
    return this.issueService.countParentIssues();
  }

  // Returns count of Child risk issues from issueService
  public getChildIssueCount(): number {
    return this.issueService.countChildIssues();
  }

}
