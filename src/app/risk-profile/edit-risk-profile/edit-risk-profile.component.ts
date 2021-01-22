import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileModel} from '../risk-profile.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RiskProfileService} from '../risk-profile.service';
import {CategoryService} from '../../risk-categories/category.service';

@Component({
  selector: 'app-edit-risk-profile',
  templateUrl: './edit-risk-profile.component.html',
  styleUrls: ['./edit-risk-profile.component.css']
})
export class EditRiskProfileComponent implements OnInit {

  @Input() editTextName: string;
  @Input() editModalRiskProfileID: number;
  @Input() editModalRiskProfileTitle: string;
  @Input() editModalRiskProfileDescription: string;
  @Input() editModalRiskProfileLikelihood: number;
  @Input() editModalRiskProfileImpact: number;
  @Input() editModalRiskProfileDateModified: string;
  @Input() editModalRiskProfileSourceOfRisk: string;
  @Input() editRiskProfile: RiskProfileModel;


  closeResult = '';

  // tslint:disable-next-line:max-line-length
  riskProfile: RiskProfileModel = new RiskProfileModel(0, 'cvbcv', 'cvbcvb', 25, 50, this.categoryService.categories[0], this.categoryService.categories[0], '00/00/0000', '00/00/0000', 'Source of Risk');

  constructor( private modalService: NgbModal,
    private riskProfileService: RiskProfileService,
    public categoryService: CategoryService ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.riskProfile.id = this.editModalRiskProfileID;
    this.riskProfile.title = this.editModalRiskProfileTitle;
    this.riskProfile.description = this.editModalRiskProfileDescription;
    this.riskProfile.likelihood = this.editModalRiskProfileLikelihood;
    this.riskProfile.impact = this.editModalRiskProfileImpact;
    this.riskProfile.dateModified = this.editModalRiskProfileDateModified;
    this.riskProfile.sourceOfRisk = this.editModalRiskProfileSourceOfRisk;
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

  // Edit issue function
  OnEditRiskProfile(): void {
    console.log("Saving Risk Profile");
    console.log(this.riskProfile);
    console.log(this.editRiskProfile.impact)
    this.riskProfile.category = this.editRiskProfile.category;
    this.riskProfile.riskCategory = this.editRiskProfile.category;
    this.riskProfileService.editRiskProfile(this.riskProfile);
    this.modalService.dismissAll();
  }

}
