import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./employees.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  providers: [EmployeeService],
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  Employee:any[] = [];
  AnnualLeave:any[] = [];

  existsEmployee = '';
  isExistsEmployee = false;
  choseEmployee: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
    this.getAnnualLeave();
  }

  getEmployee(): void{
    this.employeeService.getEmployee()
        .subscribe((employee) => {
          this.Employee = employee;
        });
  }

  getAnnualLeave(): void{
    this.employeeService.getAnnualLeave()
        .subscribe((annualLeave)=>{
          this.AnnualLeave = annualLeave;
        });
  }

  searchEmployee(): void{
    const id = this.existsEmployee;

    this.choseEmployee = _.filter(this.Employee, function (o) {
      return (_.includes(id,o._id));
    });

    if (this.existsEmployee !== 'Choose...'){
      this.isExistsEmployee = true;
    }else{
      this.isExistsEmployee = false;
    }

    if(this.choseEmployee.length > 1){
      this.choseEmployee.shift();
    }

  }

  deleteEmployee(id: String, key: String):void{
    this.employeeService.deleteEmployee(id)
        .subscribe();

    const index = this.Employee.indexOf(key, 0);
    if (index > -1) {
      this.Employee.splice(index, 1);
    }
  }

  deleteAnnualLeave(id: String, key: String):void{
    this.employeeService.deleteAnnualLeave(id)
        .subscribe();

    const index = this.AnnualLeave.indexOf(key, 0);
    if (index > -1) {
      this.AnnualLeave.splice(index, 1);
    }
  }

  headElementsAnnualLeave = ['First name', 'Last name', 'Position', 'From data', 'To data', 'Length of the days', 'Operation'];

  //View employees
  headElementsViewEmployees = ['First name', 'Last name', 'Position', 'Phone no.', 'Login name', 'Operation'];

  headElementsViewExtraEmployees = ['Login name', 'Address', 'Email', 'Password', 'Name bank', 'Account number'];


}
