import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrievanceInfo } from './grievance-info.service.response';

@Injectable({
  providedIn: 'root'
})
export class GrievanceService {

  constructor(
    private http: HttpClient
  ) {}

  getGrievances() {
    return this.http.get<GrievanceInfo>('/assets/grievances.json');
  }
}
