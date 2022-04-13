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
  Rooms:any[] = [];
  Clients:any[] = [];

  clientFirstName = '';
  clientLastName = '';
  clientEmail = '';
  clientPhoneNo = '';
  clientAddress = '';
  clientPesel = '';

  personPesel = '';
  personFirstName = '';
  personLastName = '';
  checkInDate = '';
  checkOutDate = '';
  checkParkingInput = false;
  checkBreakfastInput = false;
  carRegist = '';
  roomNumberSelect = '';
  numberOfPeople = 0;
  priceBookingInput = '';

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
    this.getRooms();
 }

    getReservation(): void {
        this.reservationService.getReservations()
            .subscribe( (reservations) => {
                this.Reservations = reservations;
                console.log(this.Reservations);
            });
    }

    getRooms():void {
      this.reservationService.getRooms()
          .subscribe((rooms) =>{
              this.Rooms = rooms;
          })
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
            number_of_people: this.numberOfPeople,
            booking_price: this.priceBookingInput
        };

        this.reservationService.addReservation(newReservation)
            .subscribe();

        this.clearForm();

        window.location.reload();

    }

    addClient():void{
        const newClient = {
            first_name: this.clientFirstName,
            last_name: this.clientLastName,
            pesel_number: this.clientPesel,
            email_address: this.clientEmail,
            phone_number: this.clientPhoneNo,
            address: this.clientAddress,
        };

        console.log(newClient);

        this.reservationService.addClient(newClient)
            .subscribe();

        this.clearForm2();
    }

    delete(id: String, key: String):void{
        this.reservationService.deleteReservation(id)
            .subscribe();

        window.location.reload();
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

    clearForm2(){
      this.clientFirstName = '';
      this.clientLastName = '';
      this.clientEmail = '';
      this.clientPhoneNo = '';
      this.clientAddress = '';
  }

  headElementsCheckIn = ['First name', 'Last name', 'Check in', 'Check out', 'Breakfast', 'Parking', 'Car registration', 'No. of room', 'No. of people','Booking price', 'Remove'];

}
