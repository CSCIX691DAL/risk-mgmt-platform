import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../task.model';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from '../task-list.component';
import {TaskService} from '../task-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem: TaskModel;
  @Input() frontPageDisplay: boolean;

  constructor(taskService: TaskService, public notificationService: ToastrService) {
    this.taskService = taskService;
  }

  private taskService: TaskService;

  // Using soft delete for task item for now, much easier to implement at the moment
  deleteSelfTask(): void {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm - using a JS dialog to handle yes/no confirmation
    if (window.confirm('Are you sure that you would like to delete Task: ' + this.taskItem.title + '?')) {
      this.taskItem.isDeleted = true;

      // Now attempting to directly remove them in firestore - no more soft deletes
      this.taskService.dbService.taskRef.doc(this.taskItem.title).delete();

      this.notificationService.success('Task "' + this.taskItem.title + '" has been deleted.', 'Task Successfully Deleted');

      //this.taskService.routeBackToHomePage();
    }
  }

  editSelfTask(): void {
    this.taskService.currentlySelectedTask = this.taskItem.title;
    this.taskService.routeToEditPage();
  }

  ngOnInit(): void {
  }

}
