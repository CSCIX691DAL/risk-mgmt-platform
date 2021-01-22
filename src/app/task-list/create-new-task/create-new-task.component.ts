import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-service';
import {TaskModel} from '../task.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../users.service';
import {UsersModel} from '../../users.model';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {

  constructor(taskService: TaskService, public userService: UsersService) {
    this.taskService = taskService;
  }

  public dummyUserModel: UsersModel;

  // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
  newTaskForm = new FormGroup({
    taskTitle: new FormControl(''),
    createdBy: new FormControl(''),
    taskStatus: new FormControl(''),
    taskDueDate: new FormControl('')
  });

  taskToCreate: TaskModel;

  private taskService: TaskService;

  createNewTask(): void {
    if (this.newTaskForm.value.taskStatus === '') {
      this.newTaskForm.value.taskStatus = 'In Progress';
    }
    console.log(this.newTaskForm.value.taskStatus);
    this.taskService.addNewTaskToArray( new TaskModel (
      this.newTaskForm.value.taskTitle,
      this.newTaskForm.value.createdBy,
      this.newTaskForm.value.taskStatus,
      new Date(this.newTaskForm.value.taskDueDate),
      new Date(),
      false
    ));
    console.log(this.newTaskForm.value.taskDueDate.valueAsDate);
    this.taskService.routeBackToHomePage();
  }

  ngOnInit(): void {
    this.dummyUserModel = this.userService.categories[0];
  }

}
