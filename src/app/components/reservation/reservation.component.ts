import {Component, OnInit} from '@angular/core';
import {ReservationService} from "./reservation.service";
import * as _ from "lodash";


@Component({
  selector: 'reservation',
  templateUrl: './reservation.component.html',
    providers: [ReservationService],
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  Reservations:any[] = [];
  Rooms:any[] = [];
  Clients:any [] = [];
  choseReservation:any [] = [];

  clientFirstName = '';
  clientLastName = '';
  clientEmail = '';
  clientPhoneNo = '';
  clientAddress = '';

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

  existsReservation = '';
  isExistsReservation = false;
  checkParking = '';
  checkBreakfast = '';

  isEmail = false;

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
    this.getRooms();
    this.getClients();
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

    getClients():void{
      this.reservationService.getClients()
          .subscribe(clients => {
              this.Clients = clients;
          })
    }

    searchReservation(){
        const id = this.existsReservation;

        this.choseReservation = _.filter(this.Reservations, function (o) {
            return (_.includes(id,o._id));
        });

        if (this.existsReservation !== 'Choose...'){
            this.isExistsReservation = true;
        }else{
            this.isExistsReservation = false;
        }

        if(this.choseReservation.length > 1){
            this.choseReservation.shift();
        }
    }

    add():void{
        this.convertBooleanType();

        const newReservation = {
            first_name: this.personFirstName,
            last_name: this.personLastName,
            check_in: this.checkInDate,
            check_out: this.checkOutDate,
            parking: this.checkParking,
            breakfast: this.checkBreakfast,
            car_registration: this.carRegist,
            room_number: this.roomNumberSelect,
            number_of_people: this.numberOfPeople,
            booking_price: this.priceBookingInput
        };

        const reservation = this.Reservations.find(r => r.check_in == newReservation.check_in);

        console.log(reservation.check_in)
        console.log(reservation.room_number)
        console.log(this.roomNumberSelect)
        console.log('nR', newReservation)

        if (this.checkInDate === reservation.check_in){
            if (this.roomNumberSelect === reservation.room_number){
                window.alert('On this date, the room is already occupied, select another room!');
            }else {
                this.reservationService.addReservation(newReservation).subscribe();
                this.clearForm();
                window.location.reload();
            }
        }else{
            this.reservationService.addReservation(newReservation).subscribe();
            this.clearForm();
            window.location.reload();
        }

    }

    addClient():void{
        const newClient = {
            first_name: this.clientFirstName,
            last_name: this.clientLastName,
            email_address: this.clientEmail,
            phone_number: this.clientPhoneNo,
            address: this.clientAddress,
        };

        const client = this.Clients.find(u => u.email_address == newClient.email_address);

        if(client){
            this.isEmail = true;
        }else {
            this.isEmail = false;
            this.reservationService.addClient(newClient).subscribe();
            this.clearForm2();
        }

    }

    convertBooleanType(){
        if (this.checkParkingInput === false){
            this.checkParking = 'No'
        }else{
            this.checkParking = 'Yes';
        }

        if (this.checkBreakfastInput === false){
            this.checkBreakfast = 'No'
        }else{
            this.checkBreakfast = 'Yes'
        }
    }

    checkEmptyInput(){
      if (this.personLastName == '' || this.personFirstName == '' || this.checkInDate == ''
      || this.checkOutDate == '' || this.priceBookingInput == '' || this.numberOfPeople <= 0){
          window.alert('You must fill red border!');
      }else{
          this.add();
      }
    }

    checkEmptyInput2(){
        if (this.clientFirstName == '' || this.clientLastName == '' || this.clientEmail == ''
            || this.clientPhoneNo == '' || this.clientAddress == ''){
            window.alert('You must fill red border!');
        }else{
            this.addClient();
        }
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
