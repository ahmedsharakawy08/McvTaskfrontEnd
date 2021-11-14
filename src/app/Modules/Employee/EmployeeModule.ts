import { NgModule } from "@angular/core";
import { EmployeeRoutingModule } from "./EmployeeRoutingModule";
import { BrowserModule } from '@angular/platform-browser';
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
import { EmployeeService } from "./services";
import {  MatSelectModule } from '@angular/material/select';
import {PageTemplateComponent}from '../../page-template/page-template.component'
@NgModule({
    declarations:[GetallComponent,CreateComponent,UpdateComponent,PageTemplateComponent],

    imports:[EmployeeRoutingModule,ReactiveFormsModule,MatSelectModule,MatFormFieldModule,HttpClientModule,MatInputModule,MatButtonModule,MatIconModule,MatMenuModule,MatTableModule,FormsModule,CommonModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHttpInterceptor,
            multi: true,
            
          },
          EmployeeService,DepartmentService

    ],
    
})
export class EmployeeModule{

}