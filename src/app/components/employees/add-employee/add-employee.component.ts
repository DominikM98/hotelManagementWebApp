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
  Users:any[] = [];
  Employees:any[] = [];

  employeeFirstName = '';
  employeeLastName = '';
  employeePesel = '';
  employeePosition = '';
  employeeEmail = '';
  employeePhoneNumber = '';
  employeeAddress = '';
  employeeNameBank = '';
  employeeAccountNumber = '';
  employeeLogin = '';
  employeePassword = '';
  employeeConfirm = '';

  employeeFirstNameAL = '';
  employeeLastNameAL = '';
  employeePositionAL = '';
  employeeFromDate = '';
  employeeToDate = '';
  employeeLength = '';

  userRole = '';
  isExists = false;
  isEmail = false;
  isConfirm = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getEmployees();
  }

  getEmployees(): void{
    this.employeeService.getEmployee()
        .subscribe( employee => {
          this.Employees = employee;
        })
  }


  addEmployee():void{
    const newEmployee = {
      first_name: this.employeeFirstName,
      last_name: this.employeeLastName,
      pesel_number: this.employeePesel,
      address: this.employeeAddress,
      email: this.employeeEmail,
      phone_number: this.employeePhoneNumber,
      position: this.employeePosition,
      name_bank: this.employeeNameBank,
      account_number: this.employeeAccountNumber,
      login: this.employeeLogin,
      password: this.employeePassword
    };

    const employee = this.Employees.find(e => e.email == newEmployee.email);

    if (employee){
      this.isEmail = true;
    }else{
      this.isEmail = false;
      this.employeeService.addEmployee(newEmployee).subscribe();
      this.clearForm();
    }

  }

  checkPassword(): void{
    if (this.employeeConfirm !== this.employeePassword){
      this.isConfirm = true;
    }else{
      this.isConfirm = false;
      this.addNewUser();
    }
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

  addNewUser():void{
    this.positionToRole();

    const newUser = {
      login: this.employeeLogin,
      password: this.employeePassword,
      role: this.userRole
    };

    const user = this.Users.find(u => u.login == newUser.login);

    if(user){
      this.isExists = true;
    }else {
      this.isExists = false;
      this.employeeService.addUser(newUser).subscribe();
      this.addEmployee();
    }

  }

  getUsers():void{
    this.employeeService.getUser()
        .subscribe((user) => {
          this.Users = user;

        })

  }

  positionToRole():void{
    if (this.employeePosition === 'Hotel Manager'){
      this.userRole = 'admin';
    }else if (this.employeePosition === 'Reception Manager'){
      this.userRole = 'reception_manager';
    }else if (this.employeePosition === 'Restaurant Manager'){
      this.userRole = 'restaurant_manager';
    }else if (this.employeePosition === 'Receptionist'){
      this.userRole = 'receptionist';
    }else if (this.employeePosition === 'Waiter'){
      this.userRole = 'waiter';
    }else if (this.employeePosition === 'Cleaner'){
      this.userRole = 'cleaner';
    }
  }

  positionsHotel = ['Hotel Manager','Reception Manager', 'Restaurant Manager', 'Receptionist' , 'Waiter', 'Cleaner'];

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
