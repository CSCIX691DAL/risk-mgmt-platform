import {Component, Input, OnInit} from '@angular/core';
import {TreatmentPlanModel} from '../treatment-plan/treatment-plan.model';
import {TreatmentPlanService} from '../treatment-plan/treatment-plan.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit {

  treatmentPlans: TreatmentPlanModel[];
  sub: Subscription;

  constructor(private treatmentPlanService: TreatmentPlanService) { }

  @Input() treatmentPlanItem: TreatmentPlanModel;

  TreatmentPlanSearchText: string;
  currentCategory: string;

  ngOnInit(): void {
    this.treatmentPlans = this.treatmentPlanService.getTreatmentPlans();
    // Listener : listening to our component
    this.sub = this.treatmentPlanService.triggerToUpdate.subscribe(
        (value) =>
        {
          console.log(value);
          this.treatmentPlans = this.treatmentPlanService.getTreatmentPlans();
        }
    );
  }
  //helps sort somehow
  setCurrentCategory(value: string){
    this.currentCategory = value;
  }

}
