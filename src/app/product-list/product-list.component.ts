import { Component, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { DeviceService } from '../device.service';
import { DeviceInformation } from '../device-information';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  displayedColumns: string[] = ['index', 'name', 'state', 'address', 'id'];
  deviceService = inject(DeviceService);
  deviceInformationList: DeviceInformation[] | [];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.deviceService.getDevicesInformationList().subscribe(data => this.dataSource.data = data);
  }
}