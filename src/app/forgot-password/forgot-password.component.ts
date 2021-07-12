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

  ngOnInit(): void { }

  // Function called when form on Forget Password page is submitted.
  onSubmit(): void {
    this.requestedReset = true;
    // Uses firebase authentication token to reset password for the account associated to the email.
    this.userAuthService.fireAuth.sendPasswordResetEmail(this.resetEmail.value).then(result => {
      // If the password reset is successful, the result is displayed in the console.
      console.log(result);
    }).catch(err => {
      // If the password reset is unsuccessful, an error message is displayed in the console.
      console.log(err);
    });
  }

}
