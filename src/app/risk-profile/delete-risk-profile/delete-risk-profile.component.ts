import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileModel} from '../risk-profile.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RiskProfileService} from '../risk-profile.service';
import {CategoryService} from '../../risk-categories/category.service';

@Component({
  selector: 'app-delete-risk-profile',
  templateUrl: './delete-risk-profile.component.html',
  styleUrls: ['./delete-risk-profile.component.css']
})
export class DeleteRiskProfileComponent implements OnInit {

  @Input() deleteTextName: string;
  @Input() deleteModalRiskProfileID: number;
  @Input() deleteModalRiskProfileTitle: string;
  @Input() deleteRiskProfile: RiskProfileModel;

  closeResult = '';

  riskProfile: RiskProfileModel = new RiskProfileModel(0, 'cvbcv', 'cvbcvb', 25, 50, this.categoryService.categories[0], this.categoryService.categories[1], 'Source of Risk');

  constructor( private modalService: NgbModal, private riskProfileService: RiskProfileService, private categoryService: CategoryService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.riskProfile.id = this.deleteModalRiskProfileID;
    this.riskProfile.title = this.deleteModalRiskProfileTitle;
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

  // Delete issue function
  OnDeleteRiskProfile(): void {
    this.riskProfileService.deleteRiskProfile(this.riskProfile);
    this.modalService.dismissAll();
  }

}
