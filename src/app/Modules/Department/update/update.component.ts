import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/Models/Department';
import { DepartmentService } from '../services';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private DepartmentService: DepartmentService,

    private router: Router,
    private activatedRoutes: ActivatedRoute
  ) {

    this.editForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
    
      id: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      const { id } = params;
      this.DepartmentService.getDepartmentById(id).subscribe((res:any) => {
     
        
        this.editForm = new FormGroup({
          Name: new FormControl(res.name, [Validators.required]),

         id: new FormControl(res.id),
        });
      
      });
    });
  }

  async UpdateDepartment() {
   
     var succeeded  = await this.DepartmentService.editDepartment(this.editForm.value);
 
    if (succeeded==true) {
   this.router.navigate(['./Department/getall']);

    }
  }
}
