import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CategoryModel} from './category.model';
import {IssueModel} from '../issue-list/issue.model';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';
import {DbService} from '../db.service';

@Injectable({providedIn: 'root'})
export class CategoryService {

  // Updates category list
  triggerToUpdate = new Subject<boolean>();

  public categories: CategoryModel[] = [
    new CategoryModel(1, 'Financial', null, 'Risks to money and investments', false),
    new CategoryModel(2, 'Strategic', null, 'Affects business strategy and objectives', false),
    new CategoryModel(3, 'Hazard', null, 'Harm or health effect to people', false),
    new CategoryModel(4, 'Operational', null, 'Impacts to systems, procedures, policies, and people', false),
  ];

  constructor(public dbService: DbService) {
    this.categories.push(    new CategoryModel(5, 'Product failure', this.categories[3], 'Defects in production', false),
      new CategoryModel(6, 'IT failure', this.categories[3], 'Ex: website down', false),
      new CategoryModel(7, 'Loss of supplier', this.categories[3], 'Vendor does not renew contract', false),
      new CategoryModel(6, 'Interest rate', this.categories[0], 'Changes in interest rates', true));
  }

  getCategories(): CategoryModel[]{
    return this.categories.slice();
  }

  // Note - this is inefficient, and goes against standard convention in using Observables - please change this at some point
  public updateRiskProfileArray(): void {

    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.categories = [];

    this.dbService.categoryRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newCategory = doc.data();

        this.categories.push(new CategoryModel(newCategory.id, newCategory.name, this.categories[newCategory.parentCategory], newCategory.description, newCategory.isSpeculativeRisk));
      });
      this.triggerToUpdate.next(true);
    });
  }

  // Delete category function
  deleteCategory(category: CategoryModel): void {
    this.categories = this.categories.filter(x => x.id !== category.id);

    this.dbService.categoryRef.doc(category.name).delete();

    this.triggerToUpdate.next(true);
  }

  // Add category function
  addCategory(category: CategoryModel): void {

    // Array is empty, set new ID to 1
    if (this.categories.length === 0) {
      // Creates new IssueModel object
      const newCategory = new CategoryModel(1, category.name, category.parentCategory, category.description,
        category.isSpeculativeRisk);

      this.dbService.categoryRef.doc(newCategory.name).set({
        id: newCategory.id,
        name: newCategory.name,
        parentCategory: newCategory.parentCategory,
        description: newCategory.description,
        isSpeculativeRisk: newCategory.isSpeculativeRisk,
      });

      // Pushes new IssueModel object to issues array
      this.categories.push(newCategory);
      // Update screen
      this.triggerToUpdate.next(true);
    }
    // Array has one or more objects
    else {
      // Generates number equal to the length of our issues array + 1
      const max = Math.max.apply(Math, this.categories.map( (x) => +x.id)) + 1;
      // Creates new IssueModel object
      const newCategory = new CategoryModel(max, category.name, category.parentCategory, category.description,
        category.isSpeculativeRisk);
      // Pushes new IssueModel object to issues array
      this.categories.push(newCategory);
      console.log(newCategory.id);
      // Update screen
      this.triggerToUpdate.next(true);
    }

  }

  // Edit category function
  editCategory(category: CategoryModel): void {
    // Put new object in location of object it's replacing
    // Note - the Number() is being used here as issue.id wasn't being evaluated as a number otherwise.
    const isInCategoryList = ((obj) => Number(obj.id) === Number(category.id));
    const oldIssueIndex = this.categories.findIndex(isInCategoryList);
    this.categories[oldIssueIndex] = category;

    // Update screen
    this.triggerToUpdate.next(true);
  }


  /*
   SORT MENU FUNCTIONS
   */

  // Sort alphabetically
  sortAlphabetically(category: CategoryModel, sortCode: number): void {
    // sortCode of 0 : Show original array
    if (sortCode === 0) {

    }
    // sortCode of 1 : Sort A-Z
    if (sortCode === 1) {
      this.categories = this.categories.sort((n1, n2) => {
        if (n1.name > n2.name) { return 1; }
        if (n1.name < n2.name) { return -1; }
        return 0;
      });
    }
    // sortCode of 2 : sort Z-A
    else if (sortCode === 2) {
      this.categories = this.categories.sort((n1, n2) => {
        if (n1.name > n2.name) { return -1; }
        if (n1.name < n2.name) { return 1; }
        return 0;
      });
    }
    this.triggerToUpdate.next(true);
  }

  public countRiskCategories(whichCategory: number): number {
    // Four types of Generic Risk Categories
    let countFinancial = 0;
    let countStrategic = 0;
    let countOperational = 0;
    let countHazard = 0;

    if (whichCategory === 1) {
      // # of categories with Financial parentCategory
      countFinancial = this.categories.filter(item => item.parentCategory === this.categories[0]).length;
      return countFinancial;
    }
    else if (whichCategory === 2) {
      // # of categories with Strategic parentCategory
      countStrategic = this.categories.filter(item => item.parentCategory === this.categories[1]).length;
      return countStrategic;
    }
    else if (whichCategory === 3) {
      // # of categories with Operational parentCategory
      countOperational = this.categories.filter(item => item.parentCategory === this.categories[2]).length;
      return countOperational;
    }
    else if (whichCategory === 4) {
      // # of categories with Hazard parentCategory
      countHazard = this.categories.filter(item => item.parentCategory === this.categories[3]).length;
      return countHazard;
    }

  }

}
