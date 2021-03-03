import {Component, Input, OnInit} from '@angular/core';
import {UsersModel} from '../../users.model';

@Component({
  selector: 'app-unapproved-user',
  templateUrl: './unapproved-user.component.html',
  styleUrls: ['./unapproved-user.component.css']
})
export class UnapprovedUserComponent implements OnInit {

  @Input() user: UsersModel;

  constructor() { }

  ngOnInit(): void {
  }

}
