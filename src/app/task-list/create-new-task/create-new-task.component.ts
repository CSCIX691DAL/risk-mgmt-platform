import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-service';
import {TaskModel} from '../task.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../users.service';
import {UsersModel} from '../../users.model';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {

  constructor(taskService: TaskService, public userService: UsersService, private dbService: DbService) {
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

  providedTitle = true;
  providedDate = true;

  createNewTask(): void {
    if (this.newTaskForm.value.taskStatus === '') {
      this.newTaskForm.value.taskStatus = 'In Progress';
    }

    if (this.newTaskForm.value.taskTitle.length < 1) {
      this.providedTitle = false;
    }
    else {
      this.providedTitle = true;
    }

    if (this.newTaskForm.value.taskDueDate.length < 1) {
      this.providedDate = false;
    }
    else {
      this.providedDate = true;
    }

    if (this.providedTitle && this.providedDate) {
      const newTask = new TaskModel(
          this.newTaskForm.value.taskTitle,
          this.newTaskForm.value.createdBy,
          this.newTaskForm.value.taskStatus,
          new Date(this.newTaskForm.value.taskDueDate),
          new Date(),
          false
      );

      // TODO: Note - task's title is being used as ID - not too great
      this.dbService.taskRef.doc(newTask.title).set({
        title: newTask.title,
        createdByID: newTask.createdBy.id,
        status: newTask.status,
        dueDate: newTask.dueDate,
        createdDate: newTask.createdDate
      });

      this.taskService.addNewTaskToArray(newTask);
      this.taskService.routeBackToHomePage();
    }
  }

  ngOnInit(): void {
    this.dummyUserModel = this.userService.categories[0];
  }

}
