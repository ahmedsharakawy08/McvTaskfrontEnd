import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from 'src/app/Models/Department';
import { Response } from 'src/app/Models/Response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  baseURL='https://localhost:44376'
  resource_path = this.baseURL + `/Department/`;
  constructor(private http: HttpClient) {}

  getallDepartment(): Observable<Response<Department[]>> {
    return this.http.get<Response<Department[]>>(this.resource_path+"getall");
  }

  getDepartmentById(id: number): Observable<Response<Department>> {
    return this.http.get<Response<Department>>(`${this.resource_path}${id}`);
  }

  async deleteDepartment(id: number): Promise<Response<any>> {
    return await this.http.delete(`${this.resource_path}${id}`).toPromise();
  }

  async addDepartment(Department: Department): Promise<Response<any>> {
    return await this.http.post(this.resource_path, Department).toPromise();
  }

  async editDepartment(Department: Department): Promise<Response<any>> {
    return await this.http
      .put(`${this.resource_path}${Department.id}`, Department)
      .toPromise();
  }
}
