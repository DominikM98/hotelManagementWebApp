import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EmployeesComponent} from "./employees.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";

import {TableModule } from 'ng-uikit-pro-standard';
import {FormsModule} from '@angular/forms';
import {TemplatePageModule} from "../template-page/template-page.module";

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        TemplatePageModule
    ],
    declarations: [
        EmployeesComponent,
        AddEmployeeComponent
    ],
    exports: [
        EmployeesComponent,
        AddEmployeeComponent
    ]
})

export class EmployeesModule {}