import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../task-list/task-service';
import { TaskModel } from '../../task-list/task.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-task-item',
  templateUrl: './new-task-item.component.html',
  styleUrls: ['./new-task-item.component.css']
})

export class NewTaskItemComponent implements OnInit {

  @Input() taskItem: TaskModel;
  @Input() frontPageDisplay: boolean;

  constructor(public taskService: TaskService, public notificationService: ToastrService) { }

  // Using soft delete for task item for now, much easier to implement at the moment
  deleteSelfTask(): void {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm - using a JS dialog to handle yes/no confirmation
    if (window.confirm('Are you sure that you would like to delete Task: ' + this.taskItem.title + '?')) {
      this.taskItem.isDeleted = true;

      // Now attempting to directly remove them in firestore - no more soft deletes
      this.taskService.dbService.taskRef.doc(this.taskItem.title).delete();

      this.notificationService.success('Task "' + this.taskItem.title + '" has been deleted.', 'Task Successfully Deleted');

    }
  }

  ngOnInit(): void { }

}
