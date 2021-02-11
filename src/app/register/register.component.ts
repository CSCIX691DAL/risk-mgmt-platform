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

  providedVerify = true;
  passwordMatch = true;
  providedEmail = true;

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerPassword.value);
    if ((this.registerPassword.value !== this.registerConfirmPassword.value) || this.registerPassword.value === '') {
      this.passwordMatch = false;
    }
    else {
      this.passwordMatch = true;
    }


    if (this.registerVerifyCode.value === undefined || this.registerVerifyCode.value.length < 1) {
      this.providedVerify = false;
    }
    else {
      this.providedVerify = true;
    }

    if (this.registerEmail.value === undefined || this.registerEmail.value.length < 1) {
      this.providedEmail = false;
    }
    else {
      this.providedEmail = true;
    }

    if (this.passwordMatch && this.providedVerify && this.providedEmail) {
      this.passwordMatch = true;
      this.userAuthService.userSignUp(this.registerEmail.value, this.registerPassword.value, this.registerVerifyCode.value);
      this.router.navigate(['login']);
    }
  }

}
