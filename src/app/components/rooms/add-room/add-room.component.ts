import { Component, OnInit } from '@angular/core';
import {RoomService} from "../rooms.service";

@Component({
  selector: 'add-room',
  templateUrl: './add-room.component.html',
  providers: [RoomService],
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  roomFloor = '';
  roomNumber = '';
  roomName = '';
  roomPeople = '';
  roomBeds = '';
  roomSmoking = '';
  roomPrice = '';

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

  add():void{
    const newRoom = {
      floor_number: this.roomFloor,
      room_number: this.roomNumber,
      room_name: this.roomName,
      number_of_people: this.roomPeople,
      type_of_beds: this.roomBeds,
      smoking: this.roomSmoking,
      price: this.roomPrice
    };

    this.roomService.addRoom(newRoom).subscribe();

    this.clearForm();
  }

  clearForm(){
    this.roomFloor = '';
    this.roomNumber = '';
    this.roomName = '';
    this.roomPeople = '';
    this.roomBeds = '';
    this.roomSmoking = '';
    this.roomPrice = '';
  }
}

