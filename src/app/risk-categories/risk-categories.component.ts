import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from './category.model';
import {CategoryService} from './category.service';
import {Subscription} from 'rxjs';
import {CategoryItemComponent} from './category-item/category-item.component';

@Component({
  selector: 'app-risk-categories',
  templateUrl: './risk-categories.component.html',
  styleUrls: ['./risk-categories.component.css']
})
export class RiskCategoriesComponent implements OnInit {

  categories: CategoryModel[];
  sub: Subscription;

  constructor(public categoryService: CategoryService) { }

  @Input() categoryItem: CategoryModel;

  SearchText: string;

  ngOnInit(): void {

    this.categories = this.categoryService.getCategories();
    // Listener : listening to our component
    this.sub = this.categoryService.triggerToUpdate.subscribe(
      (value) =>
      {
        console.log(value);
        this.categories = this.categoryService.getCategories();
      }
    );
  }

}
