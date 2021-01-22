import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../category.model';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})

export class CategoryItemComponent implements OnInit {

  @Input() categoryItem: CategoryModel;

  constructor( private categoryService: CategoryService ) { }

  ngOnInit(): void {}

  // Delete category function : Relies on deleteCategory() from category.service.ts
  onDeleteCategory(): void {
    this.categoryService.deleteCategory(this.categoryItem);
  }

}
