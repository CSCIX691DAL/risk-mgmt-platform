import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../../../task-list/task.model';

@Component({
  selector: 'app-org-tasks-item',
  templateUrl: './org-tasks-item.component.html',
  styleUrls: ['./org-tasks-item.component.css']
})
export class OrgTasksItemComponent implements OnInit {

  @Input() task: TaskModel;

  constructor() { }

  ngOnInit(): void {
  }

}
