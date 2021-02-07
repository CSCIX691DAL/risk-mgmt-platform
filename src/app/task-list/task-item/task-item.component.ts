import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../task.model';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from '../task-list.component';
import {TaskService} from '../task-service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem: TaskModel;

  constructor(taskService: TaskService) {
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

      this.taskService.routeBackToHomePage();
    }
  }

  editSelfTask(): void {
    this.taskService.currentlySelectedTask = this.taskItem.title;
    this.taskService.routeToEditPage();
  }

  ngOnInit(): void {
  }

}
