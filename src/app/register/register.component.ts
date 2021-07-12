import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LandingService} from '../landing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userAuthService: UserAuthService, private router: Router, public landingService: LandingService) {
    if (landingService.landingEmail && landingService.landingEmail.length > 0) {
      this.registerEmail.setValue(this.landingService.landingEmail);
    }
  }

  registerEmail = new FormControl('');
  registerPassword = new FormControl('');
  registerConfirmPassword = new FormControl('');
  registerVerifyCode = new FormControl('');
  userName = new FormControl('');

  providedVerify = true;
  passwordMatch = true;
  providedEmail = true;
  providedName = true;

  ngOnInit(): void { }

  // Called after Sign up form is submitted.
  onSubmit(): void {
    console.log(this.registerPassword.value);

    // Checks if password and confirm password match and that the string is not empty.
    if ((this.registerPassword.value !== this.registerConfirmPassword.value) || this.registerPassword.value === '') {
      this.passwordMatch = false;
    } else {
      this.passwordMatch = true;
    }

    // Checks to see if organization name is undefined or empty.
    if (this.registerVerifyCode.value === undefined || this.registerVerifyCode.value.length < 1) {
      this.providedVerify = false;
    } else {
      this.providedVerify = true;
    }

    // Checks if email input is undefined or empty.
    if (this.registerEmail.value === undefined || this.registerEmail.value.length < 1) {
      this.providedEmail = false;
    } else {
      this.providedEmail = true;
    }

    // Checks if username is undefined or empty.
    if (this.userName.value === undefined || this.userName.value.length < 1) {
      this.providedName = false;
    } else {
      this.providedName = true;
    }

    // If all checks pass, a new account can be created.
    if (this.passwordMatch && this.providedVerify && this.providedEmail && this.providedName) {
      this.passwordMatch = true;
      // Creates account using email, password, organization name (registerVerifyCode), and username.
      this.userAuthService.userSignUp(
          this.registerEmail.value,
          this.registerPassword.value,
          this.registerVerifyCode.value,
          this.userName.value
      );
      this.router.navigate(['login']);
    }
  }

}
