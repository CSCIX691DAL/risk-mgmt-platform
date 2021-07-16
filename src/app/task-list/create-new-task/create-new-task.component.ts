import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task-service';
import {TaskModel} from '../task.model';
import {FormControl, FormGroup} from '@angular/forms';
import {UsersService} from '../../users.service';
import {UsersModel} from '../../users.model';
import {DbService} from '../../db.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})

export class CreateNewTaskComponent implements OnInit {

  constructor( taskService: TaskService, public userService: UsersService, private dbService: DbService, public modalService: NgbModal, public notificationService: ToastrService ) {
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

  // Initialize blank TaskModel object
  taskToCreate: TaskModel;

  private taskService: TaskService;

  providedTitle = true;
  providedDate = true;
  closeResult = '';

  createNewTask(): void {

    // Error checking for empty Task Status
    if (this.newTaskForm.value.taskStatus === '') {
      // If Task Status empty, set to In Progress
      this.newTaskForm.value.taskStatus = 'In Progress';
    }

    // Error checking for empty Task Title
    if (this.newTaskForm.value.taskTitle.length < 1) {
      // Task title is empty
      this.providedTitle = false;
    } else {
      // Task title exists
      this.providedTitle = true;
    }

    // Error checking for empty Task Due Date
    if (this.newTaskForm.value.taskDueDate.length < 1) {
      // Task Due Date is empty
      this.providedDate = false;
    } else {
      // Task Due Date exists
      this.providedDate = true;
    }

    // If Title and Due Date exist, create the task
    if (this.providedTitle && this.providedDate) {
      // Create Task object called newTask with values assigned in the form
      const newTask = new TaskModel(
          this.newTaskForm.value.taskTitle,
          this.newTaskForm.value.createdBy,
          this.newTaskForm.value.taskStatus,
          new Date(this.newTaskForm.value.taskDueDate),
          new Date(),
          false
      );

      // Display success popup on screen
      this.notificationService.success('Task "' + newTask.title + '" assigned to ' + newTask.createdBy.firstName, 'Task Successfully Created');

      // Insert task into Database
      // TODO: Note - task's title is being used as ID - not too great
      this.dbService.taskRef.doc(newTask.title).set({
        title: newTask.title,
        createdByID: newTask.createdBy.id,
        status: newTask.status,
        dueDate: newTask.dueDate,
        createdDate: newTask.createdDate
      });

      // Adds newly created Task to Array
      this.taskService.addNewTaskToArray(newTask);

      // Closes Create Task Modal
      this.modalService.dismissAll();

    }
  }

  ngOnInit(): void {
    this.dummyUserModel = this.userService.categories[0];
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Returns how the user closed the Modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
