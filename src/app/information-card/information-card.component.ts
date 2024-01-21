import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';
import { DashboardInformation } from '../dashboard-information'; 
import { MatChipsModule } from '@angular/material/chips';



@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [ MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatChipsModule ],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.css'
})
export class InformationCardComponent {
  @Input() dashboardInformation!: DashboardInformation;
}
