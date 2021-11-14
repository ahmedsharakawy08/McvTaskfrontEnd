import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GetallComponent } from './getall/getall.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    { path:"create", component: CreateComponent },
    { path:"update/:id", component: UpdateComponent },
    { path:"getall", component: GetallComponent }
];

@NgModule({
    exports: [RouterModule],
    imports:[RouterModule.forChild(routes)]
})

export class EmployeeRoutingModule{}