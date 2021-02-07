import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userAuthService: UserAuthService) { }

  registerEmail = new FormControl('');
  registerPassword = new FormControl('');

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userAuthService.userSignUp(this.registerEmail.value, this.registerPassword.value, "placeholder")
  }

}
