import { Component, OnInit } from '@angular/core';
import {ChartsModule, Label, MultiDataSet, SingleDataSet} from 'ng2-charts';
import {TaskService} from '../task-list/task-service';
import {ChartType} from 'chart.js';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-tasks-summary',
  templateUrl: './tasks-summary.component.html',
  styleUrls: ['./tasks-summary.component.css']
})
export class TasksSummaryComponent implements OnInit {

  public taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
    this.exampleLabels = new Array<Label>();
    this.exampleData = new Array<Array<number>>();
    this.tasksByCategory = new Array<Array<string>>();

    this.updateChartDisplay();
  }

  // tslint:disable-next-line:max-line-length
  // Note - this is simply a proof-of-concept - thank you to https://stackblitz.com/edit/ng2-charts-doughnut-template for serving as a reference for the below.
  exampleLabels: Label[];
  exampleData: MultiDataSet;
  exampleTitle = 'Tasks Summary';
  exampleChartType: ChartType = 'doughnut';
  doughnutChart: Chart;
  tasksByCategory: Array<Array<string>>;

  public updateChartDisplay(): void {
    // tslint:disable-next-line:max-line-length
    // Thanks to Vlad Bezden for his nice ES6 one-liner to get distinct properties https://stackoverflow.com/questions/15125920/how-to-get-distinct-values-from-an-array-of-objects-in-javascript
    const tempExampleLabels = new Set(this.taskService.getTaskItemArray().map(task => task.status));
    const numberArr = new Array<number>();

    for (const taskCategory of tempExampleLabels.values()) {
      this.exampleLabels.push(taskCategory);

      // tslint:disable-next-line:max-line-length
      // Thanks to Alberto Trindade for his solution on counting numbers of occurrences of properties in a ES6 one-liner https://stackoverflow.com/questions/45547504/counting-occurrences-of-particular-property-value-in-array-of-objects
      // tslint:disable-next-line:max-line-length
      const categoryCount = this.taskService.getTaskItemArray().filter((arrValue) => (arrValue.status === taskCategory && arrValue.isDeleted === false)).length;
      this.exampleData = new Array<Array<number>>();

      this.tasksByCategory.push([taskCategory, categoryCount.toString()]);
      numberArr.push(categoryCount);
    }

    this.exampleData.push(numberArr);
  }

  // Thank you to Joris for helping me with getting the label of the clicked area in a ng2-charts Chart after much frustration
  // https://stackoverflow.com/questions/38378984/chart-js-angular-2-ng2-charts-custom-on-click-event
  getClicked(event) {
    TaskService.currentlySelectedStatus = this.exampleLabels[event.active[0]._index].toString();
    console.log(this.taskService.currentlySelectedTask);
  }

  ngOnInit(): void {
    // @ts-ignore
    this.doughnutChart = new Chart(document.getElementById('doughnutChart'),
      {
        options: {aspectRatio: 1.75, responsive: false, responsiveAnimationDuration: 2}
      });
  }
}
