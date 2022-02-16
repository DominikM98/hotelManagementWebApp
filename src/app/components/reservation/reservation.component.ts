import {Component, OnInit} from '@angular/core';
import {ReservationService} from "./reservation.service";

@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
    providers: [ReservationService],
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  Reservation = [];
  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
 }

    getReservation(): void {
        this.reservationService.getReservations()
            .subscribe( (reservation) => (this.Reservation = reservation), console.log );
    }

    add():void{
        const newReser = {
            first_name: this.personFirstName,
            last_name: this.personLastName,
            check_in: this.checkInDate,
            check_out: this.checkOutDate,
            breakfast: this.checkBreakfastInput,
            parking: this.checkParkingInput,
            car_registration: this.carRegist,
            room_number: this.roomNumberSelect,
            booking_price: this.priceBookingInput}

        this.reservationService.addReservation(newReser)
            .subscribe();

        const value = this.elementsCheckIn.push({
            firstName: this.personFirstName,
            lastName: this.personLastName,
            checkIn: this.checkInDate,
            checkOut: this.checkOutDate,
            breakfast: this.checkBreakfastInput,
            parking: this.checkParkingInput,
            carRegistration: this.carRegist,
            roomNumber: this.roomNumberSelect,
            bookingPrice: this.priceBookingInput
        });
    }

    delete(key: string){
        const index = this.elementsCheckIn.indexOf(key, 0);
        if (index > -1) {
            this.elementsCheckIn.splice(index, 1);
        }
    }

  personFirstName = '';
  personLastName = '';
  checkInDate = '';
  checkOutDate = '';
  checkParkingInput = false;
  checkBreakfastInput = false;
  carRegist = '';
  roomNumberSelect = '';
    priceBookingInput = '';


  elementsCheckIn: any = [
    {firstName: 'Andrzej', lastName: 'Kuźnia', checkIn: '2022-01-05', checkOut: '2022-01-15', breakfast: false, parking: false, carRegistration: '', roomNumber: '101', bookingPrice: '320.00$'},

  ];

  headElementsCheckIn = ['First name', 'Last name', 'Check in', 'Check out', 'Breakfast', 'Parking', 'Car registration', 'No. of room', 'Booking price'];

  addNewReservation(){



  }

}
