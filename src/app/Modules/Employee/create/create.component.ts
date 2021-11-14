import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from '../services';
import { DepartmentService } from '../../Department/services';
import { Department } from 'src/app/Models/Department';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addForm: FormGroup;
  countries: Employee[] = [];
  Departments: Department[] = [];
  constructor(
    private EmployeeService: EmployeeService,  private DepartmentService: DepartmentService,
 
    private router : Router
  ) {

    this.addForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Title: new FormControl('', [Validators.required]),
      DeptId: new FormControl(null, ),
      EmpNumber: new FormControl('', [Validators.required]),
     
    });
    this.getallDepartments()
  }

  ngOnInit(): void {
    
  }
  getallDepartments(): void {
    this.DepartmentService.getallDepartment().subscribe((res:any) => {
      console.log(res)
      this.Departments = res;
    });
  }
  
  async AddDepartment() {
   
    const data = await this.EmployeeService.addEmployee(this.addForm.value);

    if(data==true){
      this.router.navigate(['./Employee/getall']);
    }
    return ;
  }
}
