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
  MobileReservations:any [] = [];
  choseReservation:any [] = [];

  clientEmail = '';
  clientAddress = '';

  personFirstName = '';
  personLastName = '';
  checkInDate = '';
  checkOutDate = '';
  checkParkingInput = false;
  checkBreakfastInput = false;
  checkMobileInput = false;
  carRegist = '';
  quantityBreakfast = '';
  roomNumberSelect = '';
  numberOfPeople = 0;
  priceBookingInput = '';
  moreInformationInput = '';
  phoneNumber = '';

  existsReservation = '';
  isExistsReservation = false;
  checkParking = '';
  checkBreakfast = '';
  checkMobile = '';
  isMobile = false;

  isEmail = false;
  email = '';

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
    this.getRooms();
    this.getClients();
    this.getMobileReservation();

 }

    getReservation() {
        this.reservationService.getReservations()
            .subscribe( (reservations) => {
                this.Reservations = reservations;
            });
    }

    getRooms(){
      this.reservationService.getRooms()
          .subscribe((rooms) =>{
              this.Rooms = rooms;
          })
    }

    getClients(){
      this.reservationService.getClients()
          .subscribe(clients => {
              this.Clients = clients;
          })
    }

    getMobileReservation(){
      this.reservationService.getMobileReservations()
          .subscribe(mobileReservation =>{
              this.MobileReservations = mobileReservation;
          })
    }

    searchReservation(){
        const id = this.existsReservation;

        this.choseReservation = _.filter(this.Reservations, function (o) {
            return (_.includes(id,o._id));
        });

        for (let i = 0; i < this.choseReservation.length; i++) {
            let phoneNumber = this.choseReservation[i].phone_number;

            if(phoneNumber !== ''){
                this.isMobile = false
            }else{
                this.isMobile = true
            }
        }

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
        console.log('before convert')
        this.convertBooleanType();
        console.log('before newReservation')
        const newReservation = {
            first_name: this.personFirstName,
            last_name: this.personLastName,
            check_in: this.checkInDate,
            check_out: this.checkOutDate,
            parking: this.checkParking,
            car_registration: this.carRegist,
            breakfast: this.checkBreakfast,
            quantity_breakfast: +this.quantityBreakfast,
            mobile_reservation: this.checkMobile,
            phone_number: this.phoneNumber,
            room_number: this.roomNumberSelect,
            number_of_people: this.numberOfPeople,
            booking_price: this.priceBookingInput,
            more_information: this.moreInformationInput,
            address_mail: this.clientEmail
        };

        console.log('before reservation')
        let reservation = this.Reservations.find(r => r.check_in == newReservation.check_in);

        if (reservation === undefined){
            reservation = newReservation.check_in
        }

        console.log(newReservation, 'undef:', reservation)

        if (this.checkInDate === reservation.check_in){
            if (this.roomNumberSelect === reservation.room_number){
                window.alert('On this date, the room is already occupied, select another room!');
            }else {
                this.reservationService.addReservation(newReservation).subscribe();
                window.location.reload();
            }
        }else{
            this.reservationService.addReservation(newReservation).subscribe();
            window.location.reload();
        }

    }

    addClient():void{
        const newClient = {
            first_name: this.personFirstName,
            last_name: this.personLastName,
            email_address: this.clientEmail,
            address: this.clientAddress,
        };

        const client = this.Clients.find(u => u.email_address == newClient.email_address);

        if(this.clientEmail === ''){
            this.add();
        }else{
            if(client){
                if (client.first_name === this.personFirstName && client.last_name === this.personLastName){
                    this.isEmail=false;
                    this.add();
                }else{
                    this.isEmail = true;
                }

            }else {
                this.isEmail = false;
                this.reservationService.addClient(newClient).subscribe();
                this.add();
            }
        }


        console.log('add client')

    }

    convertBooleanType(){
        if (!this.checkParkingInput){
            this.checkParking = 'No'
        }else{
            this.checkParking = 'Yes';
        }

        if (!this.checkBreakfastInput){
            this.checkBreakfast = 'No'
        }else{
            this.checkBreakfast = 'Yes'
        }

        if (!this.checkMobileInput){
            this.checkMobile = 'No'
        }else{
            this.checkMobile = 'Yes'
        }
    }

    checkEmptyInput(){
      if (this.personLastName == '' || this.personFirstName == '' || this.checkInDate == ''
      || this.checkOutDate == '' || this.priceBookingInput == '' || this.numberOfPeople <= 0){
          window.alert('You must fill red border!');
      }else{
          console.log('check empty input')
          this.addClient();
      }
    }

    delete(id: String):void{
        this.reservationService.deleteReservation(id)
            .subscribe();

        window.location.reload();
    }

    deleteMobileReservation(id: String):void{
        this.reservationService.deleteMobileReservation(id)
            .subscribe();

        window.location.reload();
    }

  headElementsReservation = ['First name', 'Last name', 'Check in', 'Check out', 'Mobile reservation', 'Phone number','Room number', 'Booking price'];
  headElementsReservation_2 = ['First name', 'Last name', 'Check in', 'Check out', 'Mobile reservation', 'Email address','Room number', 'Booking price'];
  headElementsReservation2 = ['Breakfast', 'Quantity breakfast', 'Parking', 'Car registration', 'No. of people', 'More information' , 'Remove'];
  headElementsMobileApp = ['First name', 'Last name', 'Check in', 'Check out', 'Breakfast', 'Quantity breakfast','Parking', 'Car registration', 'No. of room', 'No. of people','Phone number', 'More information','Remove'];

}
