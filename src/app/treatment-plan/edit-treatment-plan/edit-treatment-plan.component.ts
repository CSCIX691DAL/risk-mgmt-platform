import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TaskModel} from '../../task-list/task.model';

@Component({
  selector: 'app-edit-treatment-plan',
  templateUrl: './edit-treatment-plan.component.html',
  styleUrls: ['./edit-treatment-plan.component.css']
})
export class EditTreatmentPlanComponent implements OnInit {
  newTreatmentPLanForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  editTreatmentPlan(): void {


}
