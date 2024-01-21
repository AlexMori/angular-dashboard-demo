import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DeviceInformation } from './device-information';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private URL = './assets/db.json';
  
  constructor(private httpClient: HttpClient){}

  getDevicesInformationList(): Observable<DeviceInformation[]> {
    return this.httpClient.get<DeviceInformation[]>(this.URL);
  }
}
