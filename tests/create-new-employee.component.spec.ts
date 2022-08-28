import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {EmployeeService} from "../src/app/components/employees/employees.service";

describe('ReservationComponent', () => {
    let service: EmployeeService;
    let httpTestingController: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule],
            providers:[HttpTestingController]
        });
        service = TestBed.inject(EmployeeService)
        httpTestingController = TestBed.inject(HttpTestingController)
    });

    describe('create new employee', function () {
        const url = 'http://localhost:3000/employee/createEmployee';

        const newEmployee = {
           first_name: 'Oliwia',
            last_name: 'Byk',
            pesel_number: '98081828585',
            address: 'Kościuszki 1/2, 33-100 Tarnów',
            email: 'byk.oliwia@gmail.com',
            phone_number: 587956325,
            position: 'waiter',
            name_bank: 'ING BANK',
            account_number: '15 1240 5093 7026 6597 6896 2922',
            login: 'bykoli',
            password: '&=3s~Bo@(#ri'
        };

        it('should call POST method', function () {
            service.addEmployee(newEmployee).subscribe();

            const req = httpTestingController.expectOne(url);
            expect(req.request.method).toBe('POST');
            req.flush(null);

        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });

});
