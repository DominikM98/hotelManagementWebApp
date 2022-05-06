import { Component, OnInit } from '@angular/core';
import {RoomService} from "../rooms.service";

@Component({
  selector: 'add-room',
  templateUrl: './add-room.component.html',
  providers: [RoomService],
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {

  Rooms:any[] = [];

  roomFloor = '';
  roomNumber = '';
  roomName = '';
  roomPeople = 0;
  roomBeds = '';
  roomSmoking = '';
  roomPrice = 0;
  smoking = false;

  isRoom = false;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void{
    this.roomService.getRooms()
        .subscribe(rooms => {
          this.Rooms = rooms;
        })
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

    const room = this.Rooms.find( r => r.room_number == newRoom.room_number);

    if (room){
      this.isRoom = true;
    }else{
      this.isRoom = false;
      this.roomService.addRoom(newRoom).subscribe();
      this.clearForm();
    }
  }

  checkEmptyInput(){
    if (this.roomFloor == '' || this.roomNumber == '' || this.roomName == ''
        || this.roomPeople <= 0 || this.roomBeds == '' || this.roomPrice <= 0){
      window.alert('You must fill red border!');
    }else{
      this.add();
    }
  }



  clearForm(){
    this.roomFloor = '';
    this.roomNumber = '';
    this.roomName = '';
    this.roomPeople = 0;
    this.roomBeds = '';
    this.roomSmoking = '';
    this.roomPrice = 0;
  }
}

