import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileModel} from '../risk-profile.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RiskProfileService} from '../risk-profile.service';
import {CategoryService} from '../../risk-categories/category.service';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-add-risk-profile',
  templateUrl: './add-risk-profile.component.html',
  styleUrls: ['./add-risk-profile.component.css']
})
export class AddRiskProfileComponent implements OnInit {

  @Input() addTextName: string;
  @Input() addModalRiskProfileID: number;
  @Input() addModalRiskProfileTitle: string;
  @Input() addModalRiskProfileDescription: string;
  @Input() addRiskProfile: RiskProfileModel;
  @Input() addModalRiskProfileLikelihood: number;
  @Input() addModalRiskProfileImpact: number;

  closeResult = '';

  // tslint:disable-next-line:max-line-length
  riskProfile: RiskProfileModel = new RiskProfileModel(0, '', '', 0, 0, this.categoryService.categories[0], this.categoryService.categories[0], 'Source of Risk');

  // tslint:disable-next-line:max-line-length
  constructor( private modalService: NgbModal, private riskProfileService: RiskProfileService, public categoryService: CategoryService, public dbService: DbService) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.riskProfile.id = this.addModalRiskProfileID;
    this.riskProfile.title = this.addModalRiskProfileTitle;
    this.riskProfile.description = this.addModalRiskProfileDescription;
  }

  /* Risk Profile Modal */
  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /* Closes Add Risk Profile Modal */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Add issue function
  OnAddRiskProfile(): void {
    this.riskProfile.riskCategory = this.riskProfile.category;
    this.riskProfileService.addRiskProfile(this.riskProfile);
    this.modalService.dismissAll();
  }
}