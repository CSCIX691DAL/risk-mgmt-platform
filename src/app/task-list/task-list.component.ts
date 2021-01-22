import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskModel} from './task.model';
import {TaskService} from './task-service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public taskService: TaskService;

  taskSearchText = '';

  public getTaskItemArray(): Array<TaskModel> {
    return this.taskService.getSortedTaskItemArray();
  }


  ngOnInit(): void {
  }

}
