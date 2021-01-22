import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../risk-categories/category.service';

@Component({
  selector: 'app-category-widget',
  templateUrl: './category-widget.component.html',
  styleUrls: ['./category-widget.component.css']
})
export class CategoryWidgetComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {}

  public getFinancialCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

  public getStrategicCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

  public getOperationalCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

  public getHazardCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

}
