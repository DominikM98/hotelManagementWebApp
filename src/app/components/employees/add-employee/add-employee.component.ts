import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employees.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  providers: [EmployeeService],
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  AnnualLeave:any[] = [];

  employeeFirstName = '';
  employeeLastName = '';
  employeePosition = '';
  employeeEmail = '';
  employeePhoneNumber = '';
  employeeAddress = '';
  employeeNameBank = '';
  employeeAccountNumber = '';
  employeeLogin = '';
  employeePassword = '';

  employeeFirstNameAL = '';
  employeeLastNameAL = '';
  employeePositionAL = '';
  employeeFromDate = '';
  employeeToDate = '';
  employeeLength = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }


  addEmployee():void{
    const newEmployee = {
      first_name: this.employeeFirstName,
      last_name: this.employeeLastName,
      address: this.employeeAddress,
      email: this.employeeEmail,
      phone_number: this.employeePhoneNumber,
      position: this.employeePosition,
      name_bank: this.employeeNameBank,
      account_number: this.employeeAccountNumber,
      login: this.employeeLogin,
      password: this.employeePassword
    };

    this.employeeService.addEmployee(newEmployee).subscribe();
    this.clearForm();
  }

  addAnnualLeave():void{
    const newAnnualLeave = {
      first_name: this.employeeFirstNameAL,
      last_name: this.employeeLastNameAL,
      position: this.employeePositionAL,
      from_date: this.employeeFromDate,
      to_date: this.employeeToDate,
      length_day: this.employeeLength
    };

    this.employeeService.addAnnualLeave(newAnnualLeave).subscribe();
    this.clearFormAL();
  }

  clearForm(){
    this.employeeFirstName = '';
    this.employeeLastName = '';
    this.employeePosition = '';
    this.employeeEmail = '';
    this.employeePhoneNumber = '';
    this.employeeAddress = '';
    this.employeeNameBank = '';
    this.employeeAccountNumber = '';
    this.employeeLogin = '';
    this.employeePassword = '';
  }

  clearFormAL(){
    this.employeeFirstNameAL = '';
    this.employeeLastNameAL = '';
    this.employeePositionAL = '';
    this.employeeFromDate = '';
    this.employeeToDate = '';
    this.employeeLength = '';
  }
}
