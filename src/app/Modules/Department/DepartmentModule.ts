import { NgModule } from "@angular/core";
import { DepartmentRoutingModule } from "./DepartmentRoutingModule";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetallComponent } from './getall/getall.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
 import { CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from "src/app/Models/CustomHttpInterceptor";
import { DepartmentService } from '../Department/services';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';


import {  MatSelectModule } from '@angular/material/select';
// import {PageTemplateComponent}from '../../page-template/page-template.component'
@NgModule({
    declarations:[GetallComponent,CreateComponent,UpdateComponent],
    imports:[DepartmentRoutingModule,ReactiveFormsModule,MatFormFieldModule,HttpClientModule,MatInputModule,MatButtonModule,MatIconModule,MatMenuModule,MatTableModule,FormsModule,CommonModule,MatSelectModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptor,
            multi: true,
            
          },
          DepartmentService

    ],
    
    
    
})
export class DepartmentModule{

}