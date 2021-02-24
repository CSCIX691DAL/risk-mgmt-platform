import {Component, Input, OnInit} from '@angular/core';
import {TreatmentPlanModel} from './treatment-plan.model';
import {TreatmentPlanService} from './treatment-plan.service';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit {

  treatmentPlans: TreatmentPlanModel[];

  constructor(private treatmentPlanService: TreatmentPlanService) {
    this.treatmentPlans = this.treatmentPlanService.getTreatmentPlans();
  }

  @Input() treatmentPlanItem: TreatmentPlanModel;

  TreatmentPlanSearchText: string;
  currentCategory: string;

  ngOnInit(): void {
    this.treatmentPlans = this.treatmentPlanService.getTreatmentPlans();
  }

}
