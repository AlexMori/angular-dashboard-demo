import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeviceService } from '../device.service';
import { DeviceInformation } from '../device-information';
import { MatDividerModule } from '@angular/material/divider';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatCardModule, MatButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  deviceService = inject(DeviceService);
  deviceInformation: DeviceInformation | undefined;
  detailID: number;

  constructor() {
    this.detailID = parseInt(this.route.snapshot.params['id'], 10);

    this.deviceService.getDevicesInformationList().subscribe(response => 
      this.deviceInformation = response.find(res => res.id == this.detailID)
    );
  }
}
