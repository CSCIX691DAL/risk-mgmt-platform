import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {LandingService} from '../landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public router: Router, public landingService: LandingService) { }

  landingEmail = new FormControl('');

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.landingEmail.value) {
      this.landingService.landingEmail = this.landingEmail.value;

      console.log(this.landingService.landingEmail);

      this.router.navigate(['register']);
    }
  }

}
