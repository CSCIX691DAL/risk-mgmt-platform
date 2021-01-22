import {Component, Input, OnInit} from '@angular/core';
import {IssueModel} from '../../issue-list/issue.model';
import {CategoryModel} from '../category.model';
import {IssueService} from '../../issue-list/issue.service';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-sort-category',
  templateUrl: './sort-category.component.html',
  styleUrls: ['./sort-category.component.css']
})
export class SortCategoryComponent implements OnInit {

  @Input() issueItem: IssueModel;
  @Input() categoryItem: CategoryModel;

  constructor( public categoryService: CategoryService ) { }

  ngOnInit(): void { }

  // Sort alphabetically
  onSortAlphabetically(sortCode: number): void {
    this.categoryService.sortAlphabetically(this.categoryItem, sortCode);
  }

}
