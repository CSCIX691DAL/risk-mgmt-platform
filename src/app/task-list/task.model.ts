import {CommonModule} from '@angular/common';
import {UsersModel} from '../users.model';

export class TaskModel {

  title: string; createdBy: UsersModel; status: string; dueDate: Date; createdDate: Date; isDeleted: boolean;

  constructor(title: string, createdBy: UsersModel, status: string, dueDate: Date, createdDate: Date, isDeleted: boolean) {
    this.title = title;
    this.createdBy = createdBy;
    this.status = status;
    this.dueDate = dueDate;
    this.isDeleted = isDeleted;
    this.createdDate = createdDate;
  }
}
