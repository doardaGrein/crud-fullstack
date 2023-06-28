import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = environment.apiUrl + '/employees';

  constructor(private http: HttpClient) {}

  getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${employeeId}`);
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}`);
  }

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  updateEmployeeStatus(employeeId: number, status: boolean): Observable<Employee> {
    const url = `${this.apiUrl}/${employeeId}/status`;
    return this.http.patch<Employee>(url, { active: status });
  }

  activateEmployee(employeeId: number): Observable<Employee> {
    const body = { active: true };
    return this.http.patch<Employee>(`${this.apiUrl}/${employeeId}/activate`, body);
  }

  deactivateEmployee(employeeId: number): Observable<Employee> {
    const body = { active: false };
    return this.http.patch<Employee>(`${this.apiUrl}/${employeeId}/deactivate`, body);
  }

  // delet

}
