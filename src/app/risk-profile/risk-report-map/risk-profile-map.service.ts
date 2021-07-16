import {RiskProfileModel} from 'src/app/risk-profile/risk-profile.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {CategoryService} from '../../risk-categories/category.service';
import {RiskProfileService} from '../risk-profile.service';
import {TaskService} from '../../task-list/task-service';
import {TaskModel} from '../../task-list/task.model';

@Injectable({providedIn: 'root'})
export class RiskProfileMapService {

  constructor(private categoryService: CategoryService, profileService: RiskProfileService) {
  }

  public profileService: RiskProfileService;

  // Updates issue list
  triggerToUpdate = new Subject<boolean>();
  public riskMapProfiles: RiskProfileModel[];

  getRiskMapProfiles(): RiskProfileModel[]{
    return this.riskMapProfiles.slice();
  }

  /* SORT MENU FUNCTIONS ( might be useful for our creation of the graph ) */

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
