import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    {data: [50, 30, 20, 5, 2], label: 'My First dataset'}
  ];

  public chartLabels: Array<any> = ['New', 'Checked-in', 'Checked-out', 'Before check-out', 'Canceled'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FDB45C', '#49FC9A', '#DF3DFE', '#3774E6',  '#F7464A'],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {  }
  };


  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }
  //Check-in
  elementsCheckIn: any = [
    {firstName: 'Andrzej', lastName: 'Kuźnia', roomNumber: '102', numberOfPeople: '2'},
    {firstName: 'Krzysztof', lastName: 'Kruk', roomNumber: '104', numberOfPeople: '1'},
    {firstName: 'Kamil', lastName: 'Małysz', roomNumber: '212', numberOfPeople: '2'},
    {firstName: 'Dominika', lastName: 'Lew', roomNumber: '309', numberOfPeople: '3'},
    {firstName: 'Paweł', lastName: 'Barbara', roomNumber: '105', numberOfPeople: '1'},
    {firstName: 'Dariusz', lastName: 'Krzyk', roomNumber: '305', numberOfPeople: '2'},
  ];

  headElementsCheckIn = ['First name', 'Last name', 'Room number', 'No. of people'];

 //Check-in group
  elementsCheckInGroup: any = [
    {name: 'Legia Warszawa', numberOfRoom: '20', numberOfPeople: '30'}
  ];

  headElementsCheckInGroup = ['Name', 'No. of room', 'No. of people'];


  //Check-out
  elementsCheckOut: any = [
    {firstName: 'Dawid', lastName: 'Stajerka', roomNumber: '230', numberOfPeople: '1'},
    {firstName: 'Agata', lastName: 'Las', roomNumber: '101', numberOfPeople: '1'},
    {firstName: 'Hans', lastName: 'Rudolf', roomNumber: '312', numberOfPeople: '4'},
    {firstName: 'Yaing', lastName: 'Xaom', roomNumber: '205', numberOfPeople: '1'},
    {firstName: 'Kacper', lastName: 'Jongmen', roomNumber: '115', numberOfPeople: '2'},
  ];

  headElementsCheckOut = ['First name', 'Last name', 'Room number', 'No. of people'];

  //Check-in group
  elementsCheckOutGroup: any = [
    {name: '-', numberOfRoom: '-', numberOfPeople: '-'}
  ];

  headElementsCheckOutGroup = ['Name', 'No. of room', 'No. of people'];

  ngOnInit() {

  }

}
