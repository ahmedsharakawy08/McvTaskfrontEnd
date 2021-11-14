import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from '../services';
import { DepartmentService } from '../../Department/services';
import { Department } from 'src/app/Models/Department';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {
  displayedColumns: string[] = [ 'name','Title','empNumber','DeptName','actions'];
  dataSource = new MatTableDataSource<Employee>();
  Departemnts: Department[] = [];
data:any
  constructor(
    private router: Router,
    private EmployeeService: EmployeeService,
  ) {   this.getAll(); }

  ngOnInit(): void {

  }

  getAll() {
    this.EmployeeService.getalldata().subscribe((res:any) => {
   
      this.dataSource = new MatTableDataSource<Employee>(res);
      console.log(res)



    });

  }


  editEmp(Employee:Employee) {
    this.router.navigate(['Employee/update', Employee.id]);
  }

  async DeleteEmp(Employee: any) {
    var succeeded = await this.EmployeeService.deleteEmployee(Employee.id);
    console.log(succeeded)
    if(succeeded){
      this.getAll()
    }
    else 
    {
      alert ("sorry"+succeeded)
    }
  }
}

