import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../risk-categories/category.model';

@Component({
  selector: 'app-org-risk-categories-item',
  templateUrl: './org-risk-categories-item.component.html',
  styleUrls: ['./org-risk-categories-item.component.css']
})
export class OrgRiskCategoriesItemComponent implements OnInit {

  constructor() { }

  @Input() category: CategoryModel;

  ngOnInit(): void {
  }

}
