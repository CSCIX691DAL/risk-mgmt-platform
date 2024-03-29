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

  profileSearchText = '';
  currentCategory: string;

  /* Defines the setup/options of the chart */
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

  /* Displays legends in the chart */
  public bubbleChartLegend = true;

  /* Data represented in the chart */
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

  /* Colors of categories */
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

// tslint:disable-next-line:max-line-length
  constructor( private riskProfileMapService: RiskProfileMapService, private modalService: NgbModal, public riskProfileService: RiskProfileService ) {
  }

  /* Ensures it gets the most recent Risk Profiles */
  public updateRiskProfiles(): void {
    this.riskMapProfiles = this.riskProfileService.getRiskProfiles();
  }

  /* Retrieves data from RiskProfile Model */
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

  /* Uses impact and likelihood in the RisksProfiles as coordinates in the chart*/
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

  /* Plots coordinates in the chart*/
  public addToChart(): void{
    this.bubbleChartData[0].data = this.riskMapProfiles.map(data => this.inputData(data));
  }

  // Events
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

        // this data retrieval is not functioning correctly
        this.riskMapProfilesOther = this.riskProfileMapService.getRiskMapProfiles()[clickedElementIndex];

        this.open();
      }
    }
  }
  /* Risk Profile Modal */
  // tslint:disable-next-line:typedef
  open() {
    this.modalService.open(this.profileModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /* Dismisses Risk Profile Modal */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  // Displays risk profile info when hovered in the chart
  public chartHovered({ event, active }: { event, active: {}[] }): void {
    // show tooltip w small info like title
    console.log(event, active);

  }
  // Displays issues based on chosen category ( sorting based on categories )
  public setCurrentCategory(value: string): void {
    this.currentCategory = value;
  }

}

