import {IssueModel} from './issue.model';
import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class IssueService{

  // Updates issue list
  triggerToUpdate = new Subject<boolean>();

  public issues: IssueModel[] = [
    new IssueModel(1, 'Issue 1', 'Issue 1 Description',  '03/16/2018', '11/14/2020', 66554433, 'Strategic', 11223344, 0),
    new IssueModel(2, 'Issue 2', 'Issue 2 Description', '05/12/2019', '09/18/2020', 7777777, 'Financial', 87654321, 0),
    new IssueModel(3, 'Issue 3', 'Issue 3 Description', '03/12/2019', '03/21/2020', 87654321, 'Strategic', 7777777, 0),
    new IssueModel(4, 'Issue 4', 'Issue 4 Description',  '01/10/2020', '08/17/2020', 12345678, 'Hazard', 66554433, 0),
    new IssueModel(5, 'Issue 5', 'Issue 5 Description', '07/21/2020', '08/10/2020', 87654321, 'Strategic', 7777777, 0),
    new IssueModel(6, 'Issue 6', 'Issue 6 Description', '01/24/2020', '10/31/2020', 12345678, 'Interest rate', 87654321, 0)
  ];


  getIssues(): IssueModel[]{
    return this.issues.slice();
  }

  // Delete issue function
  deleteIssue(issue: IssueModel): void {
    // console.log(issue.id);
    this.issues = this.issues.filter(x => x.id !== issue.id);
    // console.log(this.issues);
    this.triggerToUpdate.next(true);
  }

  // Add issue function
  addIssue(issue: IssueModel): void {

    // Array is empty, set new ID to 1
    if (this.issues.length === 0) {
      // Creates new IssueModel object
      const newIssue = new IssueModel(1, issue.title, issue.description,  issue.dateCreated,
        issue.dateModified, issue.modifiedBy, issue.riskCategory, issue.assignee, Number(issue.parentIssue));
      // Pushes new IssueModel object to issues array
      this.issues.push(newIssue);
      // Update screen
      this.triggerToUpdate.next(true);
    }
    // Array has one or more objects
    else {
      // Generates number equal to the length of our issues array + 1
      const max = Math.max.apply(Math, this.issues.map( (x) => +x.id)) + 1;
      // Creates new IssueModel object
      const newIssue = new IssueModel(max, issue.title, issue.description, issue.dateCreated,
        issue.dateModified, issue.modifiedBy, issue.riskCategory, issue.assignee, Number(issue.parentIssue));
      // Pushes new IssueModel object to issues array
      this.issues.push(newIssue);
      // Update screen
      this.triggerToUpdate.next(true);
    }

  }

  // Edit issue function
  editIssue(issue: IssueModel): void {
    // Create new IssueModel object
    const newIssue = new IssueModel(issue.id, issue.title, issue.description, issue.dateCreated,
      issue.dateModified, issue.modifiedBy, issue.riskCategory, issue.assignee, Number(issue.parentIssue));
    // Put new object in location of object it's replacing
    // Note - the Number() is being used here as issue.id wasn't being evaluated as a number otherwise.
    const isInIssueList = ((obj) => Number(obj.id) === Number(issue.id));
    const oldIssueIndex = this.issues.findIndex(isInIssueList);
    this.issues[oldIssueIndex] = issue;
    // Update screen
    this.triggerToUpdate.next(true);
  }

  /*
   SORT MENU FUNCTIONS
   */

  // Sort alphabetically
  sortAlphabetically(issue: IssueModel, sortCode: number): void {
    // sortCode of 0 : Show original array
    if (sortCode === 0) {

    }
    // sortCode of 1 : Sort A-Z
    if (sortCode === 1) {
      this.issues = this.issues.sort((n1, n2) => {
        if (n1.title > n2.title) { return 1; }
        if (n1.title < n2.title) { return -1; }
        return 0;
      });
    }
    // sortCode of 2 : sort Z-A
    else if (sortCode === 2) {
      this.issues = this.issues.sort((n1, n2) => {
        if (n1.title > n2.title) { return -1; }
        if (n1.title < n2.title) { return 1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  // Count Parent Issues
  countParentIssues(): number {
    // Parent Issue Count
    let numParentIssues = 0;

    // # of Parent issues
    numParentIssues = this.issues.filter(item => Number(item.parentIssue) === Number(0)).length;
    return numParentIssues;
  }

  // Count Child Issues
  countChildIssues(): number {
    // Parent Issue Count
    let numChildIssues = 0;

    // # of Issues with Parent
    numChildIssues = this.issues.filter(item => Number(item.parentIssue) !== Number(0)).length;
    return numChildIssues;
  }

}
