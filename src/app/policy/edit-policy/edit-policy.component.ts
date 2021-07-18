import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskModel} from '../../task-list/task.model';
import {PolicyModel} from '../policy.model';
import {DbService} from '../../db.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {PolicyService} from '../policy.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {

  constructor(public dbService: DbService, public modalService: NgbModal, public notificationService: ToastrService, public riskService: RiskProfileService, public policyService: PolicyService) { }

  newPolicyForm: FormGroup;
  @Input() inputPolicy: PolicyModel;

  closeResult = '';

  public currentModel: PolicyModel;

  //intinitlize policy form and attributes.
  ngOnInit(): void {

    this.currentModel = this.inputPolicy;
    // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
    this.newPolicyForm = new FormGroup({
      policyTitle: new FormControl(this.currentModel.title),
      policyDescription: new FormControl(this.currentModel.description),
      riskProfiles: new FormControl(this.currentModel.riskProfile)
    });
  }
  //for editing the policy
  editPolicy(): void {

    const newPolicy =  new PolicyModel (
        0,
        this.newPolicyForm.value.policyTitle,
        this.newPolicyForm.value.policyDescription,
        this.newPolicyForm.value.riskProfiles,
    );

    console.log("New Policy");
    console.log(newPolicy);

    const riskTitles = [];

    newPolicy.riskProfile.forEach((risk) => {
      riskTitles.push(risk);
    });


    console.log(riskTitles);

    this.dbService.policyRef.doc(this.currentModel.title).delete();

    this.dbService.policyRef.doc(newPolicy.title).set({
      title: newPolicy.title,
      description: newPolicy.description,
      riskProfiles: riskTitles
    });

    this.policyService.editPolicy(newPolicy, this.inputPolicy);

    console.log("New");
    console.log(newPolicy);

    this.modalService.dismissAll();

  }

  //Show content
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //dismissing 
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
