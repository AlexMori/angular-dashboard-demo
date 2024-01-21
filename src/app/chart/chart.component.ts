import { Component, ViewChild } from '@angular/core';
import { NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ NgxChartsModule ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent  {

  multi: any[];
  view: [number, number] = [700, 400];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Nr macchine per paese';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}

export var multi = [
  {
    "name": "Italia",
    "series": [
      {
        "name": "2000",
        "value": 7000
      },
      {
        "name": "2010",
        "value": 14000
      },
      {
        "name": "2023",
        "value": 50000
      }
    ]
  },

  {
    "name": "Francia",
    "series": [
      {
        "name": "2000",
        "value": 1000
      },
      {
        "name": "2010",
        "value": 2500
      },
      {
        "name": "2023",
        "value": 13000
      }
    ]
  },

  {
    "name": "Germania",
    "series": [
      {
        "name": "2000",
        "value": 5500
      },
      {
        "name": "2010",
        "value": 15000
      },
      {
        "name": "2023",
        "value": 38800
      }
    ]
  },
  {
    "name": "UK",
    "series": [
      {
        "name": "2000",
        "value": 3000
      },
      {
        "name": "2010",
        "value": 12000
      },
      {
        "name": "2023",
        "value": 20000
      }
    ]
  }
];
