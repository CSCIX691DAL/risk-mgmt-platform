import {Component, Input, OnInit} from '@angular/core';
import {TreatmentPlanModel} from '../treatment-plan.model';

@Component({
  selector: 'app-treatment-plan-item',
  templateUrl: './treatment-plan-item.component.html',
  styleUrls: ['./treatment-plan-item.component.css']
})
export class TreatmentPlanItemComponent implements OnInit {

  @Input() treatmentPlanItem: TreatmentPlanModel;

  constructor( ) { }

  ngOnInit(): void {
    console.log(this.treatmentPlanItem);
  }

}
