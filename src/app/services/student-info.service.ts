import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsInfo } from './students-info.service.response';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {

  constructor(
    private http: HttpClient
  ) {}

  getStudentsInfo() {
    return this.http.get<StudentsInfo>('/assets/studentsInfo.json');
  }
}
