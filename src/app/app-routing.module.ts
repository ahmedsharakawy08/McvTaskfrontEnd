import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Department', loadChildren: () => import('./Modules/Department/DepartmentModule').then(m => m.DepartmentModule) },
  { path: 'Employee', loadChildren: () => import('./Modules/Employee/EmployeeModule').then(m => m.EmployeeModule) },
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
