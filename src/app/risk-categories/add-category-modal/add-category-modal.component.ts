import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent {

  @Input() buttonName: string;
  @Input() modalHeader: string;

  closeResult = '';

  constructor(
    private modalService: NgbModal,
    public categoryListService: CategoryListService
  ) {}

  public addCategory(name, parentCategory, description, isSpeculativeRisk){
    var newCat = {
      name: name,
      parentCategory: parentCategory,
      description: description,
      isSpeculativeRisk: isSpeculativeRisk
    };
    this.categoryListService.categoryList.push(newCat);
  }

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
}
