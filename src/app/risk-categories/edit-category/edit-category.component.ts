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
  disableEditParentSelection = '';
  initialParentValue = '';

  category: CategoryModel = new CategoryModel(0, 'cvb', this.categoryService.categories[0], 'cvbcbcvb', false);

  constructor(private modalService: NgbModal, public categoryService: CategoryService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.category.id = this.editModalID;
    this.category.name = this.editModalName;
    this.category.description = this.editModalDescription;
    this.category.parentCategory = this.editCategory.parentCategory;

    this.setInitialParentValue(this.category.parentCategory.getParentName());
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

  public setInitialParentValue(inputValue: any): void {
    const categoryParent = inputValue;
    console.log(categoryParent);
    // If Risk Category being edited is a child, enable parent selection
    if (categoryParent === 'none') {
      this.initialParentValue = '';
      this.disableEditParentSelection = '';
      console.log('Child Category, Enable Parent');
    }
    // Else, Risk Category being edited is a parent, disabled parent selection
    else {
      this.initialParentValue = 'disable';
      this.disableEditParentSelection = 'disable';
      console.log('Parent Category, Disable Parent');
    }
  }

  public isEditParentCategory(isParentInput: any): void {
    const isParent = '';

    // If Category is a Parent Category
    if (isParentInput === isParent) {
      this.disableEditParentSelection = '';
    }
    // Else, Category is a Child Category
    else {
      this.disableEditParentSelection = 'disabled';
    }
  }

  // Edit issue function
  OnSubmit(): void {
    this.categoryService.editCategory(this.category);
    this.modalService.dismissAll();
  }

}
