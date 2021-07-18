import { Component, Input, OnInit } from '@angular/core';
import { TreatmentPlanModel } from '../treatment-plan.model';
import { TreatmentPlanService } from '../treatment-plan.service';

@Component({
  selector: 'app-treatment-plan-item',
  templateUrl: './treatment-plan-item.component.html',
  styleUrls: ['./treatment-plan-item.component.css']
})

export class TreatmentPlanItemComponent implements OnInit {
  plans: TreatmentPlanModel[];
  @Input() treatmentPlanItem: TreatmentPlanModel;

  constructor(public treatmentPlanService: TreatmentPlanService ) { }

  ngOnInit(): void {
    console.log(this.treatmentPlanItem);
  }

  onDeleteIssue(): void {
    console.log(this.treatmentPlanItem);
    this.treatmentPlanService.deletePlan(this.treatmentPlanItem);
  }
}
