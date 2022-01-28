import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'room-cleaning',
  templateUrl: './room-cleaning.component.html',
  styleUrls: ['./room-cleaning.component.scss']
})
export class RoomCleaningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  elementsCheckIn: any = [
    {noOfRoom: '101', date: '2022-01-04', check: ''},
    {noOfRoom: '103', date: '2022-01-19', check: ''},
    {noOfRoom: '201', date: '2022-01-14', check: ''},
    {noOfRoom: '202', date: '2022-01-14', check: ''},
    {noOfRoom: '203', date: '2022-01-14', check: ''},

  ];

  headElementsCheckIn = ['No. of room', 'Date', 'Check'];
}
