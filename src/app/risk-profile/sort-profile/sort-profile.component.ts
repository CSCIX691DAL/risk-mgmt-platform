import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IssueModel} from '../../issue-list/issue.model';
import {CategoryModel} from '../../risk-categories/category.model';
import {IssueService} from '../../issue-list/issue.service';
import {CategoryService} from '../../risk-categories/category.service';
import {RiskProfileModel} from '../risk-profile.model';
import {RiskProfileService} from '../risk-profile.service';

@Component({
  selector: 'app-sort-profile',
  templateUrl: './sort-profile.component.html',
  styleUrls: ['./sort-profile.component.css']
})
export class SortProfileComponent implements OnInit {

  @Input() issueItem: IssueModel;
  @Input() riskProfileItem: RiskProfileModel;

  @Output() categorySelectedEvent = new EventEmitter<string>();

  RiskProfileSearchText: string;

  constructor( private riskProfileService: RiskProfileService, public categoryService: CategoryService ) { }

  ngOnInit(): void { }

  // Sort alphabetically
  onSortAlphabetically(sortCode: number): void {
    this.riskProfileService.sortAlphabetically(this.riskProfileItem, sortCode);
  }

  // Sort likelihood
  onSortLikelihood(sortCode: number): void {
    this.riskProfileService.sortLikelihood(sortCode);
  }

  // Sort Level of Risk
  onSortLeveLofRisk(sortCode: number): void{
    this.riskProfileService.sortLevelofRisk(sortCode);
  }

  // sort impact
  onSortImpact(sortCode: number): void {
    this.riskProfileService.sortImpact(sortCode);
  }

  // Sends the selected category to parent component
  emitSelectedCategory(value: string){
    this.categorySelectedEvent.emit(value);
  }

}
