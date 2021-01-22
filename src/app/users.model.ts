/*import {stringify} from "querystring";
import {isBoolean} from "util";*/

export class UsersModel
{
  // Initialize variables
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  dateJoined: string;
  isEmployed: boolean;

  constructor(id: number, firstName: string, lastName: string, dateOfBirth: string, dateJoined: string, isEmployed: boolean ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.dateJoined = dateJoined;
    this.isEmployed = isEmployed;
  }
}
