import {Component, Input, OnInit} from '@angular/core';
import {RiskProfileModel} from './risk-profile.model';
import {RiskProfileService} from './risk-profile.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrls: ['./risk-profile.component.css']
})
export class RiskProfileComponent implements OnInit {

  riskProfiles: RiskProfileModel[];
  sub: Subscription;

  constructor( private riskProfileService: RiskProfileService ) { }

  @Input() riskProfileItem: RiskProfileModel;

  RiskProfileSearchText: string;
  currentCategory: string;

  ngOnInit(): void {
    this.riskProfiles = this.riskProfileService.getRiskProfiles();
    // Listener : listening to our component
    this.sub = this.riskProfileService.triggerToUpdate.subscribe(
      (value) =>
      {
        console.log(value);
        this.riskProfiles = this.riskProfileService.getRiskProfiles();
      }
    );
  }

  setCurrentCategory(value: string){
    this.currentCategory = value;
  }

}
