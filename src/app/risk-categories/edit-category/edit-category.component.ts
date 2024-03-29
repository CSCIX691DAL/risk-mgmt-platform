import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../category.service';
import {CategoryModel} from '../category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  @Input() editTextName: string;
  @Input() editModalID: number;
  @Input() editModalName: string;
  @Input() editParentCategory: CategoryModel;
  @Input() editModalDescription: string;
  @Input() editCategory: CategoryModel;

  closeResult = '';
  parentChecked = false;
  childChecked = false;

  category: CategoryModel = new CategoryModel(0, 'cvb', this.categoryService.categories[0], 'cvbcbcvb', false);

  constructor(private modalService: NgbModal, public categoryService: CategoryService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.category.id = this.editModalID;
    this.category.name = this.editModalName;
    this.category.description = this.editModalDescription;
    this.category.parentCategory = this.editCategory.parentCategory;
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public initialParentCategory(initialParentValue: any): void {
    const initialEditParentCategory = initialParentValue;

    if (initialEditParentCategory === 'None') {
      // Parent equals none, therefore this category is a parent, disable parent options
      this.parentChecked = true;
      this.childChecked = false;
    }
    // Parent has value, therefore this category is a child, enable parent options
    else {
      this.parentChecked = false;
      this.childChecked = true;
    }
  }

  public isEditParentCategory(isParentInput: any): void {
    // If Category is a Parent Category
    if (isParentInput === true) {
      this.parentChecked = true;
      this.childChecked = false;
    }
    // Else, Category is a Child Category
    else {
      this.parentChecked = false;
      this.childChecked = true;
    }
  }

  // Edit issue function
  OnSubmit(): void {
    this.categoryService.editCategory(this.category);
    this.modalService.dismissAll();
  }

}
