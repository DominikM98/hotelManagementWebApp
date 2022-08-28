import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ReservationService} from "../src/app/components/reservation/reservation.service";

describe('ReservationComponent', () => {
    let service: ReservationService;

    let httpTestingController: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule],
            providers:[HttpTestingController]
        });
        service = TestBed.inject(ReservationService)
        httpTestingController = TestBed.inject(HttpTestingController)
    });

    describe('get reservations', () =>{
        it('should call GET method', function () {
            let url = 'http://localhost:3000/reservation/showReservations'
            service.getReservations().subscribe();

            const req = httpTestingController.expectOne(url);
            expect(req.request.method).toBe(url);
            req.flush(null);
        });
    });

    describe('add reservation', function () {
        const url = 'http://localhost:3000/reservation/createReservation';

        const newReservation = {
            first_name: 'Dominik',
            last_name: 'Majcher',
            check_in: '2022-08-27',
            check_out: '2022-08-31',
            parking: 'Yes',
            car_registration: 'KT00001',
            breakfast: 'Yes',
            quantity_breakfast: 2,
            mobile_reservation: 'No',
            phone_number: '',
            room_number: '201',
            number_of_people: 2,
            booking_price: 1000.00,
            more_information: ''
        };

        it('should call POST method', function () {
            service.addReservation(newReservation).subscribe();

            const req = httpTestingController.expectOne(url);
            expect(req.request.method).toBe('POST');
            req.flush(null);

        });
    });

    describe('delete reservation', () => {
        const url = 'http://localhost:3000/reservation/deleteReservation?id=';

        const id: string = '6295c3fd85228129b528fb1d';

        it('should call DELETE method', function () {
            service.deleteReservation(id).subscribe();

            const req = httpTestingController.expectOne(url+id);
            req.flush(id);
        });

    });

    afterEach(() => {
        httpTestingController.verify();
    });

});
