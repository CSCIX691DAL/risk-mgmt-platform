import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-list/task-service';
import {TaskModel} from '../task-list/task.model';

@Component({
  selector: 'app-new-tasklist',
  templateUrl: './new-tasklist.component.html',
  styleUrls: ['./new-tasklist.component.css']
})
export class NewTasklistComponent implements OnInit {

  constructor(public taskService: TaskService) { }
  taskSearchText = '';

  public getTaskItemArray(): Array<TaskModel> {
    return this.taskService.getSortedTaskItemArray();
  }

  ngOnInit(): void {
  }
}
