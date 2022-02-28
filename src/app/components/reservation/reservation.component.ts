import {Component, OnInit} from '@angular/core';
import {ReservationService} from "./reservation.service";

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
    providers: [ReservationService],
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  Reservations:any[] = [];
  personFirstName = '';
  personLastName = '';
  checkInDate = '';
  checkOutDate = '';
  checkParkingInput = false;
  checkBreakfastInput = false;
  carRegist = '';
  roomNumberSelect = '';
  priceBookingInput = '';

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
 }

    getReservation(): void {
        this.reservationService.getReservations()
            .subscribe( (reservations) => {
                this.Reservations = reservations;
                console.log(this.Reservations);
            });
    }

    add():void{
        const newReservation = {
            first_name: this.personFirstName,
            last_name: this.personLastName,
            check_in: this.checkInDate,
            check_out: this.checkOutDate,
            parking: this.checkParkingInput,
            breakfast: this.checkBreakfastInput,
            car_registration: this.carRegist,
            room_number: this.roomNumberSelect,
            booking_price: this.priceBookingInput
        };

        this.reservationService.addReservation(newReservation)
            .subscribe();

        this.clearForm();
    }

    delete(id: String, key: String):void{
        this.reservationService.deleteReservation(id)
            .subscribe();

        const index = this.Reservations.indexOf(key, 0);
        if (index > -1) {
            this.Reservations.splice(index, 1);
        }
    }

    clearForm(){
        this.personFirstName = '';
        this.personLastName = '';
        this.checkInDate = '';
        this.checkOutDate = '';
        this.checkBreakfastInput = false;
        this.checkParkingInput = false;
        this.carRegist = '';
        this.roomNumberSelect = '';
        this.priceBookingInput = '';
    }

  headElementsCheckIn = ['First name', 'Last name', 'Check in', 'Check out', 'Breakfast', 'Parking', 'Car registration', 'No. of room', 'Booking price', 'Remove reservation'];

}
