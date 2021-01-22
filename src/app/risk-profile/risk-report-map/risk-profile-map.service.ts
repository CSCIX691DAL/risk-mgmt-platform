import {RiskProfileModel} from 'src/app/risk-profile/risk-profile.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CategoryService} from '../../risk-categories/category.service';

@Injectable({providedIn: 'root'})
export class RiskProfileMapService {

  constructor(private categoryService: CategoryService) {}

  // Updates issue list
  triggerToUpdate = new Subject<boolean>();
  public riskMapProfiles: RiskProfileModel[] = [
    new RiskProfileModel(1, 'Risk Profile 1', 'This is risk profile 1', 3, 5, this.categoryService.categories[0], this.categoryService.categories[0], '08/10/2019', '01/10/2020', 'Source Of Risk #1'),
    new RiskProfileModel(2, 'Risk Profile 2', 'This is risk profile 2', 5, 1, this.categoryService.categories[1], this.categoryService.categories[1], '08/6/2019', '02/15/2020', 'Source Of Risk #2'),
    new RiskProfileModel(3, 'Risk Profile 3', 'This is risk profile 3', 7, 3, this.categoryService.categories[2], this.categoryService.categories[2], '08/9/2019', '03/07/2020', 'Source Of Risk #3'),
    new RiskProfileModel(4, 'Risk Profile 4', 'This is risk profile 4', 5, 2, this.categoryService.categories[3], this.categoryService.categories[3], '08/8/2019', '04/22/2019', 'Source Of Risk #4'),
    new RiskProfileModel(5, 'Risk Profile 5', 'This is risk profile 5', 5, 5, this.categoryService.categories[4], this.categoryService.categories[4], '08/19/2019', '05/17/2020', 'Source Of Risk #5')
  ];

  getRiskMapProfiles(): RiskProfileModel[]{
    return this.riskMapProfiles.slice();
  }

  // it only needs to use certain info for the graph, I dont think it needs all the below functionality aswell
  /*
  // Delete Risk Profile function
  deleteRiskProfile(riskProfile: RiskProfileModel): void {
    // console.log(issue.id);
    this.riskProfiles = this.riskProfiles.filter(x => x.id !== riskProfile.id);
    // console.log(this.issues);
    this.triggerToUpdate.next(true);
  }

  // Add Risk Profile function
  addRiskProfile(riskProfile: RiskProfileModel): void {

    // Array is empty, set new ID to 1
    if (this.riskProfiles.length === 0) {
      // Creates new IssueModel object
      const newIssue = new RiskProfileModel(1, riskProfile.title, riskProfile.description,
        riskProfile.likelihood, riskProfile.impact, riskProfile.category, riskProfile.riskCategory,
        new Date().toISOString().substr(0, 10), new Date().toISOString().substr(0, 10));
      // Pushes new IssueModel object to issues array
      this.riskProfiles.push(newIssue);
      // Update screen
      this.triggerToUpdate.next(true);
    }
    // Array has one or more objects
    else {
      // Generates number equal to the length of our issues array + 1
      const max = Math.max.apply(Math, this.riskProfiles.map( (x) => +x.id)) + 1;
      // Creates new IssueModel object
      const newIssue = new RiskProfileModel(max, riskProfile.title, riskProfile.description,
        riskProfile.likelihood, riskProfile.impact, riskProfile.category, riskProfile.riskCategory,
        new Date().toISOString().substr(0, 10), new Date().toISOString().substr(0, 10));
      // Pushes new IssueModel object to issues array
      this.riskProfiles.push(newIssue);
      // Update screen
      this.triggerToUpdate.next(true);
    }

  }

  // Edit Risk Profile function
  editRiskProfile(riskProfile: RiskProfileModel): void {
    // Create new IssueModel object
    const newIssue = new RiskProfileModel(riskProfile.id, riskProfile.title, riskProfile.description,
      riskProfile.likelihood, riskProfile.impact, riskProfile.category, riskProfile.riskCategory,
      riskProfile.dateCreated, new Date().toISOString().substr(0, 10));
    // Put new object in location of object it's replacing
    // Note - the Number() is being used here as issue.id wasn't being evaluated as a number otherwise.
    const isInIssueList = ((obj) => Number(obj.id) === Number(riskProfile.id));
    const oldIssueIndex = this.riskProfiles.findIndex(isInIssueList);
    this.riskProfiles[oldIssueIndex] = riskProfile;
    // Update screen
    this.triggerToUpdate.next(true);
  }

  */
  /*
   SORT MENU FUNCTIONS
   might be useful for our creation of the graph
   */

  // Sort alphabetically
  sortAlphabetically(riskProfile: RiskProfileModel, sortCode: number): void {
    // sortCode of 0 : Show original array
    if (sortCode === 0) {

    }
    // sortCode of 1 : Sort A-Z
    if (sortCode === 1) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.title > n2.title) { return 1; }
        if (n1.title < n2.title) { return -1; }
        return 0;
      });
    }
    // sortCode of 2 : sort Z-A
    else if (sortCode === 2) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.title > n2.title) { return -1; }
        if (n1.title < n2.title) { return 1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  // Sort likelihood
  sortLikelihood(sortCode: number): void {
    // sortCode of 1 : sort likelihood High to Low
    if (sortCode === 1) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.likelihood > n2.likelihood) { return -1; }
        if (n1.likelihood < n2.likelihood) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort likelihood Low to High
    else if (sortCode === 2) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.likelihood > n2.likelihood) { return 1; }
        if (n1.likelihood < n2.likelihood) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  // Sort impact
  sortImpact(sortCode: number): void {
    // sortCode of 1 : sort impact High to Low
    if (sortCode === 1) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.impact > n2.impact) { return -1; }
        if (n1.impact < n2.impact) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort impact Low to High
    else if (sortCode === 2) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.impact > n2.impact) { return 1; }
        if (n1.impact < n2.impact) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  // Sort date created
  sortDateCreated(sortCode: number): void {
    // sortCode of 1 : sort date created Earliest to Latest
    if (sortCode === 1) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        const n1DateCreated = n1.dateCreated;

        if (n1.impact > n2.impact) { return -1; }
        if (n1.impact < n2.impact) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort date created Latest to Earliest
    else if (sortCode === 2) {
      this.riskMapProfiles = this.riskMapProfiles.sort((n1, n2) => {
        if (n1.impact > n2.impact) { return 1; }
        if (n1.impact < n2.impact) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }


}
