import { Component, OnInit } from '@angular/core';
import {ReservationService} from '../reservation/reservation.service';

@Component({
  selector: 'room-cleaning',
  templateUrl: './room-cleaning.component.html',
  providers: [ReservationService],
  styleUrls: ['./room-cleaning.component.scss']
})
export class RoomCleaningComponent implements OnInit {

  constructor(private roomsReservationService: ReservationService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  Rooms:any[] = [];

  getRooms(): void{
    this.roomsReservationService.getReservations()
        .subscribe((rooms) => {
          this.Rooms = rooms;
          console.log(this.Rooms);
        })
  }


  headElementsCheckIn = ['No. of room', 'Date'];
}
