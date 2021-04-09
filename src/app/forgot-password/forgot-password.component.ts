import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public userAuthService: UserAuthService) { }

  resetEmail = new FormControl('');
  requestedReset = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.requestedReset = true;
    this.userAuthService.fireAuth.sendPasswordResetEmail(this.resetEmail.value).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }

}
