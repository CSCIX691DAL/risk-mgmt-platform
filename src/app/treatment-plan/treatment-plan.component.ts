import {Component, Input, OnInit} from '@angular/core';
import {TreatmentPlanModel} from './treatment-plan.model';
import {TreatmentPlanService} from './treatment-plan.service';
import {TaskModel} from '../task-list/task.model';

@Component({
  selector: 'app-treatment-plan',
  templateUrl: './treatment-plan.component.html',
  styleUrls: ['./treatment-plan.component.css']
})
export class TreatmentPlanComponent implements OnInit {

  treatmentPlans: TreatmentPlanModel[];

  constructor(public treatmentPlanService: TreatmentPlanService) {
    this.treatmentPlans = this.treatmentPlanService.treatmentPlans;
  }

  @Input() treatmentPlanItem: TreatmentPlanModel;

  TreatmentPlanSearchText: string;
  currentCategory: string;

  ngOnInit(): void {
    this.treatmentPlans = this.treatmentPlanService.treatmentPlans;
  }

  iterate(p1: TaskModel, p2: number, p3: TaskModel[] ): TaskModel {
      return p1;
  }
}
