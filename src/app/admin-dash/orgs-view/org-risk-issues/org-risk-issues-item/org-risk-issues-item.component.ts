import { Component, Input, OnInit } from '@angular/core';
import { IssueModel } from '../../../../issue-list/issue.model';

@Component({
  selector: 'app-org-risk-issues-item',
  templateUrl: './org-risk-issues-item.component.html',
  styleUrls: ['./org-risk-issues-item.component.css']
})

export class OrgRiskIssuesItemComponent implements OnInit {

  constructor() { }

  @Input() issue: IssueModel;

  ngOnInit(): void { }

}
