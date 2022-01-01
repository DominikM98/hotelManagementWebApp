import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.scss']
})
export class ModifyEmployeeComponent {

  editField: string = 'null';
  personList: Array<any> = [
    { id: 1, firstName: 'Krzyszof', lastName: 'Guz', workplace: 'Manager Reception', peselNumber: '985461235412', emailAddress: 'vega.aurelia@gmail.com', phoneNumber: 123456789 , address: 'Kościuszki 23, 33-102 Tarnowo' },
    { id: 2, firstName: 'Antoni', lastName: 'Pawlicki', workplace: 'Reception', peselNumber: '648752431942', emailAddress: 'igor.oliwia@gmail.com', phoneNumber: 789456123, address: 'Krakowksa 223, 33-102 Tarnowo' },
    { id: 3, firstName: 'Oliwia', lastName: 'Ramaga', workplace: 'Reception', peselNumber: '7645817245781', emailAddress: 'szambo.grzegorz@gmail.com', phoneNumber: 321654987, address: 'Wola Będzno 213, 33-102 Tarnowo' },
    { id: 4, firstName: 'John Depp', lastName: 'Narux', workplace: 'Intern', peselNumber: '97854621345972', emailAddress: 'narux.katarzyna@gmail.com', phoneNumber: 987654321, address: 'Szymanowska 1/5, 33-102 Tarnowo' },
  ];

  awaitingPersonList: Array<any> = [
    
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }


}
