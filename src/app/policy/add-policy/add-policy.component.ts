import { Component, OnInit } from '@angular/core';
import {PolicyService} from '../policy.service';
import {FormControl, FormGroup} from '@angular/forms';
import {PolicyModel} from '../policy.model';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {RiskProfileModel} from '../../risk-profile/risk-profile.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent implements OnInit {

  constructor(public policyService: PolicyService, public riskService: RiskProfileService, private modalService: NgbModal) { }

  public selectedRiskModels: RiskProfileModel[] = [];

  // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
  public newPolicyForm = new FormGroup({
    policyTitle: new FormControl(''),
    policyDescription: new FormControl(''),
    riskProfiles: new FormControl('')
  });

  closeResult = '';

  ngOnInit(): void {
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


  OnAdd(): void {
    const newPolicy = new PolicyModel(0, this.newPolicyForm.value.policyTitle, this.newPolicyForm.value.policyDescription, []);

    console.log(this.newPolicyForm.value.riskProfiles);

    this.policyService.addNewPolicy(newPolicy);

    this.modalService.dismissAll();
  }

}
