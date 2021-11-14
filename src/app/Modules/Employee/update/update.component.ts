import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from '../../Department/services';
import { EmployeeService } from '../services';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editForm: FormGroup;
  Departments: Department[] = [];
  constructor(
    private EmployeeService: EmployeeService,
    private DepartmentService: DepartmentService,
    private router: Router,
    private activatedRoutes: ActivatedRoute
  ) {
    this.getDepartments();
    this.editForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      deptId: new FormControl('', ),
      empNumber: new FormControl('', [Validators.required]),
      id: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      const { id } = params;
      this.EmployeeService.getEmployeeById(id).subscribe((res:any) => {

        this.editForm = new FormGroup({
          name: new FormControl(res.name, [Validators.required]),
          deptId: new FormControl(res.deptId, [Validators.required]),
          empNumber: new FormControl(res.empNumber, [Validators.required]),
          title: new FormControl(res.title, [Validators.required]),
          id: new FormControl(res.id),
        });
      });
    });
  }

  getDepartments(): void {
    this.DepartmentService.getallDepartment().subscribe((res:any) => {
      this.Departments = res;
   console.log(   this.Departments )
    });
  }
  async updateEmployee() {
 var succeeded  = await this.EmployeeService.editEmployee(this.editForm.value);
    if (succeeded==true) {
      this.router.navigate(['/Employee/getall']);
    }
  }
}
