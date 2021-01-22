import {Component, Input, OnInit} from '@angular/core';
import {IssueModel} from './issue.model';
import {IssueService} from './issue.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})

export class IssueListComponent implements OnInit {

  issues: IssueModel[];
  sub: Subscription;
  currentCategory: string;

  constructor(private issueService: IssueService) { }

  @Input() issueItem: IssueModel;

  IssueSearchText: string;

  ngOnInit(): void {
    this.issues = this.issueService.getIssues();
    // Listener : listening to our component
    this.sub = this.issueService.triggerToUpdate.subscribe(
      (value) =>
      {
        console.log(value);
        this.issues = this.issueService.getIssues();
      }
    );
  }

  setCurrentCategory(value: string){
    this.currentCategory = value;
  }

}
