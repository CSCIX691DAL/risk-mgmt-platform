import {Injectable} from '@angular/core';
import {TaskModel} from './task.model';
import {Router} from '@angular/router';
import {TasksSummaryComponent} from '../tasks-summary/tasks-summary.component';
import {CategoryModel} from '../risk-categories/category.model';
import {UsersService} from '../users.service';
import {DbService} from '../db.service';

// Using a injectable to share the same info between components
// https://angular.io/guide/dependency-injection & https://angular.io/guide/architecture-services
@Injectable()
export class TaskService {



  constructor(private router: Router, private userService: UsersService, public dbService: DbService) {
  }

  public static currentCategoryToSort = '';
  public static reverseSort = false;
  public static currentlySelectedStatus = '';
  private taskArr: Array<TaskModel> = [];

  public taskItemArray: Array<TaskModel> = [
    new TaskModel('C - Example Task', this.userService.categories[0], 'Completed', new Date(2020, 5, 1), new Date(2020, 1, 17), false),
    new TaskModel('A - Example Task', this.userService.categories[1], 'In Progress', new Date(2020, 8, 4), new Date(2020, 2, 25), false),
    new TaskModel('B - Example Task', this.userService.categories[2], 'Completed', new Date(2018, 1, 7), new Date(2018, 1, 2), false),
    new TaskModel('D - Example Task', this.userService.categories[3], 'In Progress', new Date(2019, 7, 8), new Date(2019, 4, 3), false),
  ];

  public currentlySelectedTask = '';

  public static sortTaskItemArray(taskModelArr: Array<TaskModel>): Array<TaskModel> {
    // Thanks to Rockey Hazmat for their great example of how to sort an Array by property
    // https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
    return taskModelArr.sort(
      // tslint:disable-next-line:only-arrow-functions
      function(a, b) {
        const firstKeyVal = a[TaskService.currentCategoryToSort];
        const secondKeyVal = b[TaskService.currentCategoryToSort];

        if (firstKeyVal > secondKeyVal) {
          return 1;
        }
        else if (secondKeyVal > firstKeyVal) {
          return -1;
        }
        else {
          return 0;
        }
      }
    );
  }

  public getIndexOfUserByEmail(email: string): number {
    let i = 0;

    for (const user of this.userService.categories) {
      if (user.id === email) {
        return i;
      }
      i++;
    }
    return -1;
  }

  // Note - this is inefficient, and goes against standard convention in using Observables - please change this at some point
  public updateTaskArray(): void {

    // "Empty" existing task array by recreating it - the problem is that we incur an additional DB call on every display update
    this.taskItemArray = [];

    this.dbService.taskRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const newTask = doc.data();

        const createdDate = new Date(0);
        createdDate.setUTCSeconds(newTask.createdDate.seconds);

        const dueDate = new Date(0);
        dueDate.setUTCSeconds(newTask.dueDate.seconds);

        console.log(newTask.createdByID);

        let i = this.getIndexOfUserByEmail(newTask.createdByID);
        console.log(i);

        this.taskItemArray.push(new TaskModel(newTask.title, this.userService.categories[i], newTask.status, dueDate, createdDate, false));
      });
    });
  }

  // Thank you to Naga Sai A for helping me with filtering an array by property here.
  // https://stackoverflow.com/questions/56779606/angular-7-splice-and-remove-dropdown-values-from-array
  public getTaskItemArray(): Array<TaskModel> {
    return this.taskItemArray.filter(task => !task.isDeleted);
  }

  public setSortedCategory(category: string): void {
    // Clear sorting if the user clicks the same heading again, otherwise set that property to be sorted
    if (TaskService.currentCategoryToSort === category) {
      if (TaskService.reverseSort) {
        TaskService.currentCategoryToSort = '';
        TaskService.reverseSort = false;
      }
      else {
        TaskService.reverseSort = true;
      }
    }
    TaskService.currentCategoryToSort = category;
  }

  public getSortedTaskItemArray(): Array<TaskModel> {
    let arr = this.taskItemArray.filter(task => !task.isDeleted);
    if (TaskService.currentlySelectedStatus !== '') {
      arr = arr.filter(task => task.status === TaskService.currentlySelectedStatus);
    }
    // If we call this function but no property to sort on has been set, just return the array
    if (TaskService.currentCategoryToSort !== '' && TaskService.reverseSort) {
      return TaskService.sortTaskItemArray(arr).reverse();
    }
    else if (TaskService.currentCategoryToSort !== '') {
      return TaskService.sortTaskItemArray(arr);
    }
    else {
      return arr;
    }
  }

  // PLEASE NOTE: this function also relies on titles being unique, it will likely not function as expected otherwise.
  public getSelectedModel(): TaskModel {
    return this.taskItemArray.filter(task => task.title === this.currentlySelectedTask)[0];
  }

  public addNewTaskToArray(newModel: TaskModel): void {
    this.taskItemArray.push(newModel);
  }

  // Source on routing programmatically - https://codecraft.tv/courses/angular/routing/navigation/ - read this for reference
  public routeToEditPage(): void {
    this.router.navigate(['edit-task']);
  }

  public routeBackToHomePage(): void {
    // Quick solution to ensuring that tasks are synced - empty and fetch tasks from db every redirection
    //this.updateTaskArray();
    this.router.navigate(['dashboard']);
  }

  // A pretty "brute-force" way of handling this, but to refresh the graph we quickly navigate away and back to the dashboard.
  // https://stackoverflow.com/questions/56017561/how-to-reload-refresh-the-current-page-in-angular-6 - thanks to crroksey for his solution
  public reRouteToRefresh(): void {
    this.router.navigate(['categories'], {skipLocationChange: true}).
    then(() => {this.router.navigate(['']); });
  }

  // Inefficient resource wise, rewrites everything right now.
  public editTask(newModel: TaskModel): void {
    this.taskItemArray[this.taskItemArray.findIndex(task => task.title === this.currentlySelectedTask)] = newModel;
  }

  public countTaskStatus(whichStatus: number): number {
    // Four types of Generic Risk Categories
    let countInProgress = 0;
    let countCompleted = 0;

    // # of Tasks In Progress
    if (whichStatus === 1) {
      countInProgress = this.taskItemArray.filter(item => item.status === 'In Progress').length;
      return countInProgress;
    }
    // # of Tasks Completed
    else if (whichStatus === 2) {
      countCompleted = this.taskItemArray.filter(item => item.status === 'Completed').length;
      return countCompleted;
    }
  }

}
