import { Component, OnInit } from '@angular/core';
import {RoomService} from "./rooms.service";
import * as _ from 'lodash'

@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  providers: [RoomService],
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  Rooms: any[] = [];

  isEditable = false;
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

  delete(id: String):void{
    this.roomService.deleteRoom(id)
        .subscribe();

    window.location.reload()
  }

  headElementsRoomItem = ['Floor','No. of room', 'Room name', 'No. of people', 'Type of beds', 'Smoking room', 'Room price','Operation'];

}
