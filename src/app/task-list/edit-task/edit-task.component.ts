import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TaskModel} from '../task.model';
import {TaskService} from '../task-service';
import {UsersService} from '../../users.service';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  public currentModel: TaskModel;
  taskToCreate: TaskModel;
  private taskService: TaskService;

  constructor(taskService: TaskService, public userService: UsersService, public dbService: DbService) {
    this.taskService = taskService;
    this.currentModel = taskService.getSelectedModel();

    // see https://angular.io/guide/reactive-forms as a guide to implementing a reactive form, as shown below.
    this.newTaskForm = new FormGroup({
      taskTitle: new FormControl(this.currentModel.title),
      createdBy: new FormControl(this.currentModel.createdBy),
      taskStatus: new FormControl(this.currentModel.status),
      // Thanks to Jess of SO for solving this insanely specific issue regarding providing a Date to the FormControl
      // https://stackoverflow.com/questions/46715543/how-to-bind-date-time-form-control
      taskDueDate: new FormControl(new Date(this.currentModel.dueDate).toISOString().substr(0, 10))
    });
  }

  editTask(): void {

    const newTask =  new TaskModel (
        this.newTaskForm.value.taskTitle,
        this.newTaskForm.value.createdBy,
        this.newTaskForm.value.taskStatus,
        new Date(this.newTaskForm.value.taskDueDate),
        new Date(),
        false
    );

    // TODO: May no longer be needed
    // this.taskService.editTask(newTask);

    // TODO: also inefficient - deleting and then creating instead of really editing - blame technical debt
    this.dbService.taskRef.doc(this.currentModel.title).delete();

    // TODO: Note - task's title is being used as ID - not too great
    this.dbService.taskRef.doc(newTask.title).set({
      title: newTask.title,
      createdByID: newTask.createdBy.id,
      status: newTask.status,
      dueDate: newTask.dueDate,
      createdDate: newTask.createdDate
    });

    this.taskService.routeBackToHomePage();
  }

  ngOnInit(): void {
  }

}
