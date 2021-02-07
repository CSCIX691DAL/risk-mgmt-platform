import { Component, OnInit } from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public userAuthService: UserAuthService, private router: Router) { }

  loginEmail = new FormControl('');
  loginPassword = new FormControl('');

  loginFailed = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userAuthService.fireAuth.signInWithEmailAndPassword(this.loginEmail.value, this.loginPassword.value).then(result => {
      this.loginFailed = false;
      this.router.navigate(['dashboard']);
    }).catch(error => {
      this.loginFailed = true;
    });
  }

}
