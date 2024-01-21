import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DashboardInformation } from './dashboard-information';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = './assets/db_dashboard_information.json';
  
  constructor(private httpClient: HttpClient){}

  getDashboardInformation(): Observable<DashboardInformation[]> {
    return this.httpClient.get<DashboardInformation[]>(this.URL);
  }
}
