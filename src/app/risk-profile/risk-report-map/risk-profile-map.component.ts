import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import {RiskProfileModel} from 'src/app/risk-profile/risk-profile.model';
import {RiskProfileMapService} from './risk-profile-map.service';
import {Subscription} from 'rxjs';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RiskProfileService} from '../risk-profile.service';


@Component({
  selector: 'app-risk-profile-map',
  templateUrl: './risk-profile-map.component.html',
  styleUrls: ['./risk-profile-map.component.css']
})
export class RiskProfileMapComponent implements OnInit {

  riskMapProfiles: RiskProfileModel[];
  riskMapProfilesOther: RiskProfileModel;
  sub: Subscription;
  @ViewChild('profileModal') public profileModal: TemplateRef<any>;
  closeResult = '';

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
          }
        }
      ]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartData: ChartDataSets[] = [
    {
      // data needs to come from risk-profile-service
      data: [
        // x = likelihood, y = impact, r = product of x * y or something like that? scale based on sizes
      ],
      label: 'Risk Profiles',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',

    },

  ];

  public bubbleChartColors: Color[] = [
    // need to associate colours with each category
    {
      backgroundColor: [
        'red',
        'green',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  constructor( private riskProfileMapService: RiskProfileMapService, private modalService: NgbModal, public riskProfileService: RiskProfileService ) {
  }

  public updateRiskProfiles() {
    this.riskMapProfiles = this.riskProfileService.getRiskProfiles();
  }

  @Input() riskProfileItem: RiskProfileModel;
  ngOnInit(): void {
    setTimeout(() => {
      this.updateRiskProfiles();

      this.sub = this.riskProfileMapService.triggerToUpdate.subscribe(
          (value) =>
          {
            console.log(value);
            this.riskMapProfiles = this.riskProfileMapService.getRiskMapProfiles();
          }
      );

      this.addToChart();
    }, 700);
  }
  public inputData(riskModel: RiskProfileModel): { x: number; y: number; r: number }{
    const x = riskModel.impact;
    const y = riskModel.likelihood;
    let r;
    if ((riskModel.likelihood * riskModel.impact) < 4) {
      r = 4;
    }
    else {
      r = (riskModel.likelihood * riskModel.impact);
    }
    return { x, y, r };
  }
  public addToChart(): void{
    this.bubbleChartData[0].data = this.riskMapProfiles.map(data => this.inputData(data));
  }
  // events
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

        // this data retireval is not functioning correctly
        this.riskMapProfilesOther = this.riskProfileMapService.getRiskMapProfiles()[clickedElementIndex];

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

  public chartHovered({ event, active }: { event, active: {}[] }): void {
    // show tooltip w small info like title
    console.log(event, active);

  }

}

