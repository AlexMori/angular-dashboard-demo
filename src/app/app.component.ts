import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgxChartsModule, DashboardComponent, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule ],
  template: `
    <main>
      <p>
        <mat-toolbar color="primary">
          <a mat-flat-button matTooltip="Go to home" aria-label="Home button" color="primary" [routerLink]="['/']"><mat-icon>home</mat-icon>HOME</a>
          <a mat-flat-button matTooltip="Go to list" aria-label="List product button" color="primary" [routerLink]="['list']">LIST PRODUCT</a>
          <a mat-flat-button matTooltip="Go to map" aria-label="Map button" color="primary" [routerLink]="['map']"><mat-icon>map</mat-icon>MAP</a>
        </mat-toolbar>
      </p>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboard-demo';
}
