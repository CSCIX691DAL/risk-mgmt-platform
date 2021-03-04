import { Injectable } from '@angular/core';
import {UsersModel} from './users.model';
import {CategoryModel} from './risk-categories/category.model';
import {DbService} from './db.service';
import {OrganizationService} from './organization.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public categories: UsersModel[] = [
    new UsersModel('1', 'John', 'Smith', '04/06/1995',   '11/14/2020', true),
    new UsersModel('2', 'Laura', 'Peters', '05/07/1992',   '09/18/2020', false),
    new UsersModel('3', 'Claire', 'Fisher', '11/2/1982',  '03/12/2019', true),
    new UsersModel('4', 'Caleb', 'Leinward', '12/12/1987',  '01/10/2020', false),
    new UsersModel('5', 'Emily', 'Wilson', '08/09/1988',  '09/13/2020', true),
    new UsersModel('6', 'Jack', 'Doherty', '11/03/1980',  '01/23/2020', false),
    new UsersModel('7', 'Kenny', 'Scrub', '06/07/1995',  '01/22/2020', true),
    new UsersModel('8', 'Jordan', 'Brown', '04/03/1997',  '01/23/2020', false),
  ];
  constructor(public dbService: DbService) {}

  public userCurrentOrg = '';

  getInactiveUsers(): UsersModel[] {
    const filteredArray = this.categories.filter(function (user) {
      return !user.isEmployed;
    });

    return filteredArray;
  }

  updateUserArray(): void {
    this.categories = [];

    this.dbService.userRef.where("organizations", 'array-contains-any', [this.userCurrentOrg]).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newUser = doc.data();

        this.categories.push(new UsersModel(doc.id, newUser.name, '', '', '', newUser.isActive));
      });
    });
  }
}
