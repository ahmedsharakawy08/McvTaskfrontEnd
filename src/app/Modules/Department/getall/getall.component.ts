import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from '../services';
@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'actions'];
  dataSource = new MatTableDataSource<Department>();
  Departemnts: Department[] = [];
data:any
  constructor(
    private router: Router,
    private DepartmentService: DepartmentService,
  ) {   this.getAll(); }

  ngOnInit(): void {

  }

  getAll() {
    this.DepartmentService.getallDepartment().subscribe((res:any) => {
   
      this.dataSource = new MatTableDataSource<Department>(res);



    });

  }


  editdept(Department:Department) {
    this.router.navigate(['Department/update', Department.id]);
  }

  async DeleteDept(Department: any) {
    var succeeded = await this.DepartmentService.deleteDepartment(Department.id);
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

