import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userAuthService: UserAuthService, private router: Router) { }

  registerEmail = new FormControl('');
  registerPassword = new FormControl('');
  registerConfirmPassword = new FormControl('');

  passwordMatch = true;

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.registerPassword.value);
    if ((this.registerPassword.value !== this.registerConfirmPassword.value) || this.registerPassword.value === '') {
      this.passwordMatch = false;
    }
    else {
      this.passwordMatch = true;
      this.userAuthService.userSignUp(this.registerEmail.value, this.registerPassword.value, "placeholder");
      this.router.navigate(['login']);
    }
  }

}
