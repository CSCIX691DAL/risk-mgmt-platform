import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskModel} from '../../task-list/task.model';
import {PolicyModel} from '../policy.model';
import {DbService} from '../../db.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.css']
})
export class EditPolicyComponent implements OnInit {

  constructor(public dbService: DbService, public modalService: NgbModal, public notificationService: ToastrService, public riskService: RiskProfileService) { }

  newPolicyForm: FormGroup;
  @Input() inputPolicy: PolicyModel;

  closeResult = '';

  public currentModel: PolicyModel;

  ngOnInit(): void {

    this.currentModel = this.inputPolicy;
    // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
    this.newPolicyForm = new FormGroup({
      policyTitle: new FormControl(this.currentModel.title),
      policyDescription: new FormControl(this.currentModel.description),
      riskProfiles: new FormControl(this.currentModel.riskprofile)
    });
  }

  editPolicy(): void {

    //this.currentModel = taskService.getSelectedModel();
    //console.log(this.currentModel);


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

}
