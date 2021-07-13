import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../risk-categories/category.service';

@Component({
  selector: 'app-category-widget',
  templateUrl: './category-widget.component.html',
  styleUrls: ['./category-widget.component.css']
})
export class CategoryWidgetComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void { }

  // Returns count of Financial risk categories from categoryService
  public getFinancialCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

  // Returns count of Strategic risk categories from categoryService
  public getStrategicCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

  // Returns count of Operational risk categories from categoryService
  public getOperationalCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

  // Returns count of Hazard risk categories from categoryService
  public getHazardCount(whichCount: number): number {
    return this.categoryService.countRiskCategories(whichCount);
  }

}
