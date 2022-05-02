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
  roomPeople = '';
  roomBeds = '';
  roomSmoking = '';
  roomPrice = '';
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
    this.isSmokingRoom();

    const newRoom = {
      floor_number: this.roomFloor,
      room_number: this.roomNumber,
      room_name: this.roomName,
      number_of_people: this.roomPeople,
      type_of_beds: this.roomBeds,
      smoking: this.smoking,
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

  isSmokingRoom(): void{
    if (this.roomSmoking === 'Yes'){
      this.smoking = true;
    }else if (this.roomSmoking === 'No'){
      this.smoking = false;
    }
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

