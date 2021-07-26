import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../../../task-list/task.model';
import { OrganizationService } from '../../../organization.service';
import { OrganizationModel } from '../../../organization.model';

@Component({
  selector: 'app-org-tasks',
  templateUrl: './org-tasks.component.html',
  styleUrls: ['./org-tasks.component.css']
})

export class OrgTasksComponent implements OnInit {

  constructor(public orgService: OrganizationService) { }

  @Input() org: OrganizationModel;

  taskList: TaskModel[];

  ngOnInit(): void {
    this.orgService.getAllTasksByOrg(this.org.orgName).then((result) => {
      this.taskList = result;
    });
  }

}
