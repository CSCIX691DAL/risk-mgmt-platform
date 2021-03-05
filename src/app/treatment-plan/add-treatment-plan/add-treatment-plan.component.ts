import {Component, Input, OnInit} from '@angular/core';
import {TreatmentPlanService} from '../treatment-plan.service';
import {TreatmentPlanModel} from '../treatment-plan.model';
import {Subscription} from 'rxjs';
import {TreatmentPlanComponent} from '../treatment-plan.component';

@Component({
  selector: 'app-add-treatment-plan',
  templateUrl: './add-treatment-plan.component.html',
  styleUrls: ['./add-treatment-plan.component.css']
})
export class AddTreatmentPlanComponent implements OnInit {

  treatmentPlans: TreatmentPlanModel[];
  sub: Subscription;

  constructor(public treatmentPlanService: TreatmentPlanService) {
  }

  @Input() categoryItem: TreatmentPlanModel;

  SearchText: string;
  category: any;
  categoryService: any;
  addTextName: any;

  ngOnInit(): void {

    this.treatmentPlans = this.treatmentPlanService.getTreatmentPlans();
    // Listener : listening to our component
    this.sub = this.treatmentPlanService.triggerToUpdate.subscribe(
        (value) => {
          console.log(value);
          this.treatmentPlans = this.treatmentPlanService.getTreatmentPlans();
        }
    );
  }

  OnSubmit() {
    this.treatmentPlans = this.treatmentPlans;
  }
}
