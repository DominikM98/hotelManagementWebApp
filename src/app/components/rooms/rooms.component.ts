import { Component, OnInit } from '@angular/core';
import {RoomService} from "./rooms.service";

@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  providers: [RoomService],
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  Rooms: any[] = [];
  roomFloor = '';
  roomNumber = '';
  roomName = '';
  roomPeople = '';
  roomBeds = '';
  roomSmoking = '';
  roomPrice = '';
  roomAvailable = true;

  editTable = false;

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.getRoom();
  }

  getRoom(): void {
    this.roomService.getRooms()
        .subscribe((rooms) => {
          this.Rooms = rooms;
          console.log(this.Rooms);
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
      price: this.roomPrice,
      available: this.roomAvailable
    };

    this.roomService.addRoom(newRoom).subscribe();

    this.clearForm();
  }

  delete(id: String, key: String):void{
    this.roomService.deleteRoom(id)
        .subscribe();

    const index = this.Rooms.indexOf(key, 0);
    if (index > -1) {
      this.Rooms.splice(index, 1);
    }
  }

  update(id: String):void{
    const updateRoom = {
      floor_number: this.roomFloor,
      room_number: this.roomNumber,
      room_name: this.roomName,
      number_of_people: this.roomPeople,
      type_of_beds: this.roomBeds,
      smoking: this.roomSmoking,
      price: this.roomPrice,
      available: this.roomAvailable
    };

    this.roomService.updateRoom(id, updateRoom).subscribe();

    this.editTable = true;
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

  headElementsRoomItem = ['Floor','No. of room', 'Room name', 'No. of people', 'Type of beds', 'Smoking room', 'Room price', 'Avaliable','Remove room','Modify room'];

}
