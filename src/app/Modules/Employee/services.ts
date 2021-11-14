import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Models/Employee';
import { Response } from 'src/app/Models/Response';
import { EmployeeVm } from 'src/app/ViewModels/EmployeeVm';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseURL='https://localhost:44376'
  resource_path = this.baseURL + `/Employee/`;
  constructor(private http: HttpClient) {}

  getallEmployee(): Observable<Response<Employee[]>> {
    return this.http.get<Response<Employee[]>>(this.resource_path+"getall");
  }

  getalldata(): Observable<Response<EmployeeVm[]>> {
    return this.http.get<Response<EmployeeVm[]>>(this.resource_path+"GetAllData");
  }

  getEmployeeById(id: number): Observable<Response<Employee>> {
    return this.http.get<Response<Employee>>(`${this.resource_path}${id}`);
  }

  async deleteEmployee(id: number): Promise<Response<any>> {
    return await this.http.delete(`${this.resource_path}${id}`).toPromise();
  }

  async addEmployee(Employee: Employee): Promise<Response<any>> {
    return await this.http.post(this.resource_path, Employee).toPromise();
  }

  async editEmployee(Employee: Employee): Promise<Response<any>> {
    return await this.http
      .put(`${this.resource_path}${Employee.id}`, Employee)
      .toPromise();
  }
}
