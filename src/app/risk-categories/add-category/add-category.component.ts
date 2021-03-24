import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../category.service';
import {CategoryModel} from '../category.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @Input() addTextName: string;
  @Input() addModalID: number;
  @Input() addModalName: string;
  @Input() addModalParentCategory: CategoryModel;
  @Input() addModalDescription: string;
  @Input() addCategory: CategoryModel;

  closeResult = '';
  disableParentSelection = '';
  addParentChecked = true;
  addChildChecked = false;

  category: CategoryModel = new CategoryModel(0, 'cvb', null, 'cvbcbcvb', false);

  constructor( private modalService: NgbModal, private categoryService: CategoryService) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.category.id = this.addModalID;
    this.category.name = this.addModalName;
    this.category.parentCategory = this.addModalParentCategory;
    this.category.description = this.addModalDescription;
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

  public isParentCategory(isParentInput: any): void {
    const isParent = '';

    // If Category is a Parent Category
    if (isParentInput === isParent) {
      this.disableParentSelection = 'disabled';
      this.addParentChecked = true;
      this.addChildChecked = false;
    }
    // Else, Category is a Child Category
    else {
      this.disableParentSelection = '';
      this.addParentChecked = false;
      this.addChildChecked = true;
    }
  }

  public resetParentCategories(): void {
    this.disableParentSelection = 'disabled';
    this.addParentChecked = true;
    this.addChildChecked = false;
  }

  // Add issue function
  OnSubmit(): void {
    this.categoryService.addCategory(this.category);
    this.modalService.dismissAll();
  }

}
