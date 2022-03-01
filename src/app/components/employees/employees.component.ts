import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./employees.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeeService],
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  Employee:any[] = [];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void{
    this.employeeService.getEmployee()
        .subscribe((employee) => {
          this.Employee = employee;
        });
  }

  delete(id: String, key: String): void{
    
  }


  //Annual Leave
  elementsAnnualLeave: any = [
    {firstName: 'John', lastName: 'Depp', position: 'Reception', fromData: '12/12/2021', toData: '26/12/2021', lengthDays: '14'},
  ];

  headElementsAnnualLeave = ['First name', 'Last name', 'Position', 'From data', 'To data', 'Length of the days'];

  //View employees
  headElementsViewEmployees = ['First name', 'Last name', 'Position', 'Phone no.', 'Login name', 'Remove'];


}
