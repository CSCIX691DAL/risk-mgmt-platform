import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {RiskProfileService} from '../risk-profile/risk-profile.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import {CommonModule} from '@angular/common';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RiskProfileModel} from '../risk-profile/risk-profile.model';

@Component({
  selector: 'app-risk-response-matrix',
  templateUrl: './risk-response-matrix.component.html',
  styleUrls: ['./risk-response-matrix.component.css']
})
export class RiskResponseMatrixComponent implements OnInit {

  currentCategory: string;
  @ViewChild('profileModal') public profileModal: TemplateRef<any>;
  closeResult = '';

  public currentModel: RiskProfileModel;

  profileSearchText = '';

  constructor(public riskProfileService: RiskProfileService, private modalService: NgbModal) { }

  // scatter
  public scatterPlugins = [pluginAnnotations];
  public scatterChartOptions: (ChartOptions & {annotation: any}) = {
    annotation: {
      // NOTE - the following is adapted from the example provided at: https://github.com/chartjs/chartjs-plugin-annotation
      annotations: [
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 0,
          xMax: 2,
          yMax: 2,
          yMin:  0,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'green',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 0,
          xMax: 2,
          yMax: 4,
          yMin:  2,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'green',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 0,
          xMax: 2,
          yMax: 6,
          yMin:  4,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'green',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 0,
          xMax: 2,
          yMax: 8,
          yMin:  6,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'green',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 0,
          xMax: 2,
          yMax: 10,
          yMin:  8,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'limegreen',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 2,
          xMax: 4,
          yMax: 2,
          yMin:  0,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'green',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 2,
          xMax: 4,
          yMax: 6,
          yMin:  4,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'limegreen',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 2,
          xMax: 4,
          yMax: 8,
          yMin:  6,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'limegreen',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 2,
          xMax: 4,
          yMax: 4,
          yMin:  2,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'limegreen',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 2,
          xMax: 4,
          yMax: 10,
          yMin:  8,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'yellow',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 4,
          xMax: 6,
          yMax: 0,
          yMin:  2,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'limegreen',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 4,
          xMax: 6,
          yMax: 4,
          yMin:  2,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'limegreen',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 4,
          xMax: 6,
          yMax: 6,
          yMin:  4,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'yellow',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 4,
          xMax: 6,
          yMax: 8,
          yMin:  6,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'yellow',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 4,
          xMax: 6,
          yMax: 10,
          yMin:  8,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'orange',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 6,
          xMax: 8,
          yMax: 2,
          yMin:  0,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'yellow',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 6,
          xMax: 8,
          yMax: 4,
          yMin:  2,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'yellow',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 6,
          xMax: 8,
          yMax: 6,
          yMin:  4,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'orange',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 6,
          xMax: 8,
          yMax: 8,
          yMin:  6,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'orange',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 6,
          xMax: 8,
          yMax: 10,
          yMin:  8,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'red',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 8,
          xMax: 10,
          yMax: 2,
          yMin:  0,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'yellow',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 8,
          xMax: 10,
          yMax: 4,
          yMin:  2,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'orange',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 8,
          xMax: 10,
          yMax: 6,
          yMin:  4,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'orange',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 8,
          xMax: 10,
          yMax: 8,
          yMin:  6,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'red',
        },
        {
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'likelihood-axis',
          yScaleID: 'impact-axis',
          xMin: 8,
          xMax: 10,
          yMax: 10,
          yMin:  8,
          borderColor: 'black',
          borderWidth: 0.5,
          backgroundColor: 'red',
        },
      ],
    },
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          max: 10,
          display: false
          // Simple fix for scale - https://www.chartjs.org/docs/latest/axes/labelling.html#scale-title-configuration
          // tslint:disable-next-line:only-arrow-functions
        },
        id: 'likelihood-axis',
        position: 'top',
        scaleLabel: {
          display: true,
          labelString: 'Impact'
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 10,
          display: false
        },
        id: 'impact-axis',
        scaleLabel: {
          display: true,
          labelString: 'Likelihood'
        }
      }]
    }
  };
  public scatterChartLabels: Label[] = [];

  /* Data represented in the chart: info from risk-profile-service */
  public scatterChartData: ChartDataSets[] = [
    {
      data: [
      ],
      label: 'Risk Profiles',
      pointBackgroundColor: 'blue',
      pointBorderColor: 'blue',
      pointRadius: 18,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  public updateGraphData(): void {
    for (const riskProfile of this.riskProfileService.getRiskProfiles()) {
      if (riskProfile.impact !== 0 && riskProfile.impact % 2 === 0) {
        riskProfile.impact = riskProfile.impact + 1;
      }
      if (riskProfile.likelihood !== 0 && riskProfile.likelihood % 2 === 0) {
        riskProfile.likelihood = riskProfile.likelihood - 1;
      }
      // @ts-ignore
      this.scatterChartData[0].data.push({x: riskProfile.impact, y: riskProfile.likelihood});
    }
  }

  ngOnInit(): void {
    // Not really a good way of doing this - this assumes that all data is loaded within 500ms of component being initialized
    setTimeout(() => this.updateGraphData(), 500);
  }

  // Thank you to Asif Karim Bherani of SO for his code on getting a specific value on click
  // https://stackoverflow.com/questions/38378984/chart-js-angular-2-ng2-charts-custom-on-click-event
  public chartClicked(e: any): void {

    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        console.log(clickedElementIndex, label, value);

        this.currentModel = this.riskProfileService.getRiskProfiles()[clickedElementIndex];

        this.open();
      }
    }
  }

  // tslint:disable-next-line:typedef
  open() {
    this.modalService.open(this.profileModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  //
  public setCurrentCategory(value: string): void {
    this.currentCategory = value;
  }

}

