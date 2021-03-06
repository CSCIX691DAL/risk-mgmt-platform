import { Component, OnInit } from '@angular/core';
import {UsersModel} from '../../users.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  userList: UsersModel[] = [];

  ngOnInit(): void {
  }

}
