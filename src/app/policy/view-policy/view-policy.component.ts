import {Component, Input, OnInit} from '@angular/core';
import {PolicyModel} from '../policy.model';
import {DbService} from '../../db.service';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {PolicyService} from '../policy.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  constructor( public dbService: DbService, public riskService: RiskProfileService, public policyService: PolicyService, private modalService: NgbModal ) { }

  @Input() inputPolicyItem: PolicyModel;

  public currentModel: PolicyModel;
  closeResult = '';
  ngOnInit(): void {

    this.currentModel = this.inputPolicyItem;

  }

  // tslint:disable-next-line:typedef
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
