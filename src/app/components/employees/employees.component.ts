import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  //First shift
  elementsFirstShift: any = [
    {firstName: 'Krzysztof', lastName: 'Guz', position: 'Manager reception'},
    {firstName: 'Antoni', lastName: 'Pawlicki', position: 'Reception'},
  ];

  headElementsFirstShift = ['First name', 'Last name', 'Position'];

  //Second shift
  elementsSecondShift: any = [
    {firstName: 'Oliwia', lastName: 'Ramaga', position: 'Reception'},
  ];

  headElementsSecondShift = ['First name', 'Last name', 'Position'];

  //Top services
  elementsTopServices: any = [
    {loginName: 'krzyguz', serviceOrders: '24', amount: '5000$'},
  ];

  headElementsTopServices = ['Login name', 'Service Orders', 'Amount'];

  //Annual Leave
  elementsAnnualLeave: any = [
    {firstName: 'John', lastName: 'Depp', position: 'Reception', fromData: '12/12/2021', toData: '26/12/2021', lengthDays: '14'},
  ];

  headElementsAnnualLeave = ['First name', 'Last name', 'Position', 'From data', 'To data', 'Length of the days'];

  //View employees
  elementsViewEmployees: any = [
    {firstName: 'Krzystof', lastName: 'Guz', position: 'Manager reception', phoneNumber: '123456789', loginName: 'krzyguz'},
    {firstName: 'Anotoni', lastName: 'Pawlicki', position: 'Reception', phoneNumber: '789456123', loginName: 'antopaw'},
    {firstName: 'Oliwia', lastName: 'Ramaga', position: 'Reception', phoneNumber: '321654987', loginName: 'oliwram'},
    {firstName: 'John', lastName: 'Depp', position: 'Intern', phoneNumber: '987654321', loginName: 'johndepp'},
  ];

  headElementsViewEmployees = ['First name', 'Last name', 'Position', 'Phone no.', 'Login name'];

  constructor() { }

  ngOnInit(): void {
  }

}
