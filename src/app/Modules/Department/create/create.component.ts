import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from '../services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
 export class CreateComponent implements OnInit {

addForm: FormGroup;
  countries: Department[] = [];
  constructor(
    private DepartmentService: DepartmentService,
 
    private router : Router
  ) {

    this.addForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
     
    });
  }

  ngOnInit(): void {}
  
  async AddDepartment() {
    const data = await this.DepartmentService.addDepartment(this.addForm.value);

    if(data==true){
      this.router.navigate(['./Department/getall']);
    }
    return ;
  }
}
