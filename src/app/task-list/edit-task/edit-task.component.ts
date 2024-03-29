import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskModel } from '../task.model';
import { TaskService } from '../task-service';
import { UsersService } from '../../users.service';
import { DbService } from '../../db.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})

export class EditTaskComponent implements OnInit {

  // Initialize Variables
  newTaskForm: FormGroup;
  public currentModel: TaskModel;
  taskToCreate: TaskModel;
  private taskService: TaskService;

  @Input() inputTask: TaskModel;
  @Input() frontPageDisplay: boolean;

  closeResult = '';

  constructor(taskService: TaskService, public userService: UsersService, public dbService: DbService,
              public modalService: NgbModal, public notificationService: ToastrService) {
    this.taskService = taskService;
  }

  editTask(): void {

    // Creates new Task object using values from Edit Task form
    const newTask =  new TaskModel (
        this.newTaskForm.value.taskTitle,
        this.newTaskForm.value.createdBy,
        this.newTaskForm.value.taskStatus,
        new Date(this.newTaskForm.value.taskDueDate),
        new Date(),
        false
    );

    // TODO: May no longer be needed
    this.taskService.editTask(newTask);

    // Deletes old version of Task just edited
    // TODO: also inefficient - deleting and then creating instead of really editing - blame technical debt
    this.dbService.taskRef.doc(this.currentModel.title).delete();

    // Creates new version of Task using the newly defined Task Object called newTask
    // TODO: Note - task's title is being used as ID - not too great
    this.dbService.taskRef.doc(newTask.title).set({
      title: newTask.title,
      createdByID: newTask.createdBy.id,
      status: newTask.status,
      dueDate: newTask.dueDate,
      createdDate: newTask.createdDate
    });

    // Displays success popup
    this.notificationService.success('Task "' + newTask.title + '" has been updated.', 'Task Successfully Edited');

    // Closes Edit Task Modal
    this.modalService.dismissAll();
  }

  ngOnInit(): void {

    this.currentModel = this.inputTask;

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

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // Returns how the user closed the Edit Task Modal
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
