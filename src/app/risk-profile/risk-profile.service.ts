import {RiskProfileModel} from './risk-profile.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CategoryModel} from '../risk-categories/category.model';
import {CategoryService} from '../risk-categories/category.service';
import {DbService} from '../db.service';
import {IssueModel} from '../issue-list/issue.model';

@Injectable({providedIn: 'root'})
export class RiskProfileService {

  // Updates issue list
  triggerToUpdate = new Subject<boolean>();

  public riskProfiles: RiskProfileModel[] = [
    new RiskProfileModel(1, 'Risk Profile 1', 'This is risk profile 1', 9, 5, this.categoryService.categories[0], this.categoryService.categories[0], 'Source Of Risk #1'),
    new RiskProfileModel(2, 'Risk Profile 2', 'This is risk profile 2', 10, 1, this.categoryService.categories[1], this.categoryService.categories[1], 'Source Of Risk #2'),
    new RiskProfileModel(3, 'Risk Profile 3', 'This is risk profile 3', 7, 3, this.categoryService.categories[2], this.categoryService.categories[2], 'Source Of Risk #3'),
    new RiskProfileModel(4, 'Risk Profile 4', 'This is risk profile 4', 5, 2, this.categoryService.categories[3], this.categoryService.categories[3], 'Source Of Risk #4'),
    new RiskProfileModel(5, 'Risk Profile 5', 'This is risk profile 5', 5, 5, this.categoryService.categories[4], this.categoryService.categories[4], 'Source Of Risk #5')
  ];

  constructor(public categoryService: CategoryService, public dbService: DbService) {
  }

  getRiskProfiles(): RiskProfileModel[]{
    return this.riskProfiles.slice();
  }

  // Delete Risk Profile function
  deleteRiskProfile(riskProfile: RiskProfileModel): void {
    // console.log(issue.id);
    this.riskProfiles = this.riskProfiles.filter(x => x.id !== riskProfile.id);

    this.dbService.riskProfileRef.doc(riskProfile.title).delete();

    // console.log(this.issues);
    this.triggerToUpdate.next(true);
  }

  // Note - this is inefficient, and goes against standard convention in using Observables - please change this at some point
  public updateRiskProfileArray(): void {

    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.riskProfiles = [];

    this.dbService.riskProfileRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newRiskProfile = doc.data();

        this.riskProfiles.push(new RiskProfileModel(newRiskProfile.id, newRiskProfile.title, newRiskProfile.description, newRiskProfile.likelihood, newRiskProfile.impact, this.categoryService.categories[newRiskProfile.category], this.categoryService.categories[newRiskProfile.riskCategory], newRiskProfile.sourceOfRisk));
      });
      this.triggerToUpdate.next(true);
    });
  }

  // Add Risk Profile function
  addRiskProfile(riskProfile: RiskProfileModel): void {

    if (riskProfile.description === undefined) {
      riskProfile.description = '';
    }

    // Array is empty, set new ID to 1
    if (this.riskProfiles.length === 0) {
      // Creates new IssueModel object
      const newIssue = new RiskProfileModel(1, riskProfile.title, riskProfile.description,
        riskProfile.likelihood, riskProfile.impact, riskProfile.category, riskProfile.riskCategory,
        riskProfile.sourceOfRisk);
      // Pushes new IssueModel object to issues array

      this.dbService.riskProfileRef.doc(newIssue.title).set({
        id: newIssue.id,
        title: newIssue.title,
        description: newIssue.description,
        likelihood: newIssue.likelihood,
        impact: newIssue.impact,
        category: newIssue.category.id - 1,
        riskCategory: newIssue.riskCategory.id - 1,
        sourceOfRisk: newIssue.sourceOfRisk
      });

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
        riskProfile.sourceOfRisk);
      // Pushes new IssueModel object to issues array
      console.log(newIssue.sourceOfRisk);

      this.dbService.riskProfileRef.doc(newIssue.title).set({
        id: newIssue.id,
        title: newIssue.title,
        description: newIssue.description,
        likelihood: newIssue.likelihood,
        impact: newIssue.impact,
        category: newIssue.category.id - 1,
        riskCategory: newIssue.riskCategory.id - 1,
        sourceOfRisk: newIssue.sourceOfRisk
      });

      this.riskProfiles.push(newIssue);
      // Update screen
      this.triggerToUpdate.next(true);
    }

  }

  // Edit Risk Profile function
  editRiskProfile(riskProfile: RiskProfileModel): void {
    // Create new IssueModel object
    console.log(riskProfile);
    const newIssue = new RiskProfileModel(riskProfile.id, riskProfile.title, riskProfile.description,
      riskProfile.likelihood, riskProfile.impact, riskProfile.category, riskProfile.riskCategory,
      riskProfile.sourceOfRisk);
    // Put new object in location of object it's replacing
    // Note - the Number() is being used here as issue.id wasn't being evaluated as a number otherwise.
    const isInIssueList = ((obj) => Number(obj.id) === Number(riskProfile.id));
    const oldIssueIndex = this.riskProfiles.findIndex(isInIssueList);
    this.riskProfiles[oldIssueIndex] = riskProfile;
    // Update screen
    this.triggerToUpdate.next(true);
  }


  /*
   SORT MENU FUNCTIONS
   */

  // Sort alphabetically
  sortAlphabetically(riskProfile: RiskProfileModel, sortCode: number): void {
    // sortCode of 0 : Show original array
    if (sortCode === 0) {

    }
    // sortCode of 1 : Sort A-Z
    if (sortCode === 1) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.title > n2.title) { return 1; }
        if (n1.title < n2.title) { return -1; }
        return 0;
      });
    }
    // sortCode of 2 : sort Z-A
    else if (sortCode === 2) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
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
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.likelihood > n2.likelihood) { return -1; }
        if (n1.likelihood < n2.likelihood) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort likelihood Low to High
    else if (sortCode === 2) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
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
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.impact > n2.impact) { return -1; }
        if (n1.impact < n2.impact) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort impact Low to High
    else if (sortCode === 2) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.impact > n2.impact) { return 1; }
        if (n1.impact < n2.impact) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  // Sort Level of Risk
  sortLevelofRisk(sortCode: number): void {
    // sortCode of 1 : sort Level of Risk High to Low
    if (sortCode === 1) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.getLevelOfRisk()  > n2.getLevelOfRisk() ) { return -1; }
        if (n1.getLevelOfRisk() < n2.getLevelOfRisk() ) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort likelihood Low to High
    else if (sortCode === 2) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.getLevelOfRisk()  > n2.getLevelOfRisk() ) { return 1; }
        if (n1.getLevelOfRisk() < n2.getLevelOfRisk() ) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  // Sort date created
  sortDateCreated(sortCode: number): void {
    // sortCode of 1 : sort date created Earliest to Latest
    if (sortCode === 1) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        const n1DateCreated = n1.dateCreated;

        if (n1.impact > n2.impact) { return -1; }
        if (n1.impact < n2.impact) { return 1; }
        return 0;
      });
    }
    // sortCode of 2 : sort date created Latest to Earliest
    else if (sortCode === 2) {
      this.riskProfiles = this.riskProfiles.sort((n1, n2) => {
        if (n1.impact > n2.impact) { return 1; }
        if (n1.impact < n2.impact) { return -1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }


  public countAllRiskLevels(whichRiskLevel: number): number {
    // Array to store number of risk levels
    let lowCounter = 0;
    let lowMedCounter = 0;
    let medCounter = 0;
    let medHighCounter = 0;
    let highCounter = 0;


    // tslint:disable-next-line:prefer-const
    for (let item of this.riskProfiles) {

      const riskLevel = item.impact * item.likelihood;

      // Check if risk level is Low (LT 21)
      if (riskLevel < 21 ) {
        // Add 1 to low counter
        lowCounter++;
      }
      // Check if risk level is Low-Med (GT 20 and LT 40)
      else if (20 < riskLevel && riskLevel < 40) {
        // Add 1 to low-med counter
        lowMedCounter++;
      }
      // Check if risk level is Med ( GT 39 and LT 61)
      else if (39 < riskLevel && riskLevel < 61) {
        // Add 1 to med counter
        medCounter++;
      }
      // Check if risk level is Med-Hi (GT 60 and LT 80)
      else if (60 < riskLevel && riskLevel < 80) {
        // Add 1 to med-high counter
        medHighCounter++;
      }
      // Check if risk level is High (GT 79)
      else if (79 < riskLevel) {
        // Add 1 to high counter
        highCounter++;
      }
    }

    // Return low risk count
    if (whichRiskLevel === 1) {
      return lowCounter;
    }
    // Return low-med risk count
    else if (whichRiskLevel === 2) {
      return lowMedCounter;
    }
    // Return med risk count
    else if (whichRiskLevel === 3) {
      return medCounter;
    }
    // Return med-high risk count
    else if (whichRiskLevel === 4) {
      return medHighCounter;
    }
    // Return high risk count
    else if (whichRiskLevel === 5) {
      return highCounter;
    }

  }

}
