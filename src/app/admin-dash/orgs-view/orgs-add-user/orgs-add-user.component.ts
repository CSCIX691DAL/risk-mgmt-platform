import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationService} from '../../../organization.service';
import firebase from 'firebase';
import firestore = firebase.firestore;
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-orgs-add-user',
  templateUrl: './orgs-add-user.component.html',
  styleUrls: ['./orgs-add-user.component.css']
})
export class OrgsAddUserComponent implements OnInit {

  constructor(private modalService: NgbModal, public orgService: OrganizationService, public notificationService: ToastrService) { }

  closeResult = '';

  userEmail = '';

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

  // Testing

  async OnAdd(): Promise<void> {

    let userNameFromEmail = '';
    await this.orgService.getUserName(this.userEmail).then((name) => {
      userNameFromEmail = name;
    });

    this.orgService.userService.dbService.userRef.doc(this.userEmail).update({
      organizations: firestore.FieldValue.arrayUnion(this.orgService.currentlySelectedOrg.orgName)
    });

    this.orgService.dbService.organizationRef.doc(this.orgService.currentlySelectedOrg.orgName).collection('users').doc(this.userEmail).set({
      id: this.userEmail,
      name: userNameFromEmail
    });

    this.modalService.dismissAll();

    this.notificationService.success(this.userEmail + ' successfully added to ' + this.orgService.currentlySelectedOrg.orgName + '!', 'User Added');


  }

}
