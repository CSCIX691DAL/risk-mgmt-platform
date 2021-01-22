import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {CategoryModel} from './category.model';
import {IssueModel} from '../issue-list/issue.model';

@Injectable({providedIn: 'root'})
export class CategoryService {

  // Updates category list
  triggerToUpdate = new Subject<boolean>();

  public categories: CategoryModel[] = [
    new CategoryModel(1, 'Financial', null, 'Risks to money and investments', false, '03/16/2018', '11/14/2020'),
    new CategoryModel(2, 'Strategic', null, 'Affects business strategy and objectives', false, '05/12/2019', '09/18/2020'),
    new CategoryModel(3, 'Hazard', null, 'Harm or health effect to people', false, '03/12/2019', '03/21/2020'),
    new CategoryModel(4, 'Operational', null, 'Impacts to systems, procedures, policies, and people', false, '01/10/2020', '08/17/2020'),
  ];

  constructor() {
    this.categories.push(    new CategoryModel(5, 'Product failure', this.categories[3], 'Defects in production', false, '05/21/2020', '09/13/2020'),
      new CategoryModel(6, 'IT failure', this.categories[3], 'Ex: website down', false, '01/23/2020', '09/14/2020'),
      new CategoryModel(7, 'Loss of supplier', this.categories[3], 'Vendor does not renew contract', false, '01/22/2020', '09/15/2020'),
      new CategoryModel(6, 'Interest rate', this.categories[0], 'Changes in interest rates', true, '01/23/2020', '09/14/2020'));
  }

  getCategories(): CategoryModel[]{
    return this.categories.slice();
  }

  // Delete category function
  deleteCategory(category: CategoryModel): void {
    console.log(category.id);
    this.categories = this.categories.filter(x => x.id !== category.id);
    console.log(this.categories);
    this.triggerToUpdate.next(true);
  }

  // Add category function
  addCategory(category: CategoryModel): void {

    // Array is empty, set new ID to 1
    if (this.categories.length === 0) {
      // Creates new IssueModel object
      const newCategory = new CategoryModel(1, category.name, category.parentCategory, category.description,
        category.isSpeculativeRisk, category.dateCreated, category.dateModified);
      // Pushes new IssueModel object to issues array
      this.categories.push(newCategory);
      console.log(newCategory.id);
      // Update screen
      this.triggerToUpdate.next(true);
    }
    // Array has one or more objects
    else {
      // Generates number equal to the length of our issues array + 1
      const max = Math.max.apply(Math, this.categories.map( (x) => +x.id)) + 1;
      // Creates new IssueModel object
      const newCategory = new CategoryModel(max, category.name, category.parentCategory, category.description,
        category.isSpeculativeRisk, category.dateCreated, category.dateModified);
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
