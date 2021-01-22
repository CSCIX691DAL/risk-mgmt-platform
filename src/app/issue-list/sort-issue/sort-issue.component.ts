import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IssueModel} from '../issue.model';
import {CategoryModel} from '../../risk-categories/category.model';
import {IssueService} from '../issue.service';
import {CategoryService} from '../../risk-categories/category.service';

@Component({
  selector: 'app-sort-issue',
  templateUrl: './sort-issue.component.html',
  styleUrls: ['./sort-issue.component.css']
})
export class SortIssueComponent implements OnInit {

  @Input() issueItem: IssueModel;
  @Input() categoryItem: CategoryModel;

  @Output() categorySelectedEvent = new EventEmitter<string>();

  constructor( private issueService: IssueService, public categoryService: CategoryService ) { }

  ngOnInit(): void { }

  // Sort alphabetically
  onSortAlphabetically(sortCode: number): void {
    this.issueService.sortAlphabetically(this.issueItem, sortCode);
  }

  // Sends the selected category to parent component
  emitSelectedCategory(value: string){
    this.categorySelectedEvent.emit(value);
  }

}
