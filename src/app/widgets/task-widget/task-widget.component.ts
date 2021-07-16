import { Component, OnInit } from '@angular/core';
import {RiskProfileService} from '../../risk-profile/risk-profile.service';
import {TaskService} from '../../task-list/task-service';

@Component({
  selector: 'app-task-widget',
  templateUrl: './task-widget.component.html',
  styleUrls: ['./task-widget.component.css']
})
export class TaskWidgetComponent implements OnInit {

  constructor( private taskService: TaskService ) { }

  ngOnInit(): void { }

  // Returns count of In Progress Tasks from taskService
  public countInProgress(whichStatus: number): number {
    return this.taskService.countTaskStatus(1);
  }

  // Returns count of Completed Tasks from taskService
  public countCompleted(whichStatus: number): number {
    return this.taskService.countTaskStatus(2);
  }

}
