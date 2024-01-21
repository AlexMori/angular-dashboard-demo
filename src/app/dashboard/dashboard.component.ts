import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { InformationCardComponent } from '../information-card/information-card.component';
import { DashboardInformation } from '../dashboard-information';
import { DashboardService } from '../dashboard.service';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  CommonModule, InformationCardComponent, MatGridListModule, ChartComponent ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  dashboardInformationList: DashboardInformation[] = [];
  dashboardService: DashboardService = inject(DashboardService);

  constructor() {
    this.dashboardService.getDashboardInformation().subscribe((response) => {
      this.dashboardInformationList = response;
    })
  }

}