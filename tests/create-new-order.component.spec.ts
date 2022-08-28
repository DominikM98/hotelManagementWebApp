import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {OrderService} from "../src/app/components/restaurant/order/order.service";

describe('ReservationComponent', () => {
    let service: OrderService;
    let httpTestingController: HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule],
            providers:[HttpTestingController]
        });
        service = TestBed.inject(OrderService)
        httpTestingController = TestBed.inject(HttpTestingController)
    });

    describe('get menu items', () =>{
        it('should call GET method', function () {
            let url = 'http://localhost:3000/restaurant/showItems';
            service.getItemMenu().subscribe();

            const req = httpTestingController.expectOne(url);
            expect(req.request.method).toBe(url);
            req.flush(null);
        });
    });

    describe('create new order', function () {
        const url = 'http://localhost:3000/restaurant/createBill';

        const order = [
            {
                product_name: 'Chicken soup',
                ingredients: 'pasta, chicken, water',
                allergens: 'gluten',
                product_weight: 200,
                product_price: 10.50,
                type_of_product: 'Soup',
                min_quantity: 2
            },
            {
                product_name: 'Chicken filet',
                ingredients: 'chicken, fries',
                allergens: 'nuts',
                product_weight: 300,
                product_price: 30.00,
                type_of_product: 'Main Dishes',
                min_quantity: 2
            }];

        const bill = {
            order: order,
            total_price: 72.9,
            discount_value: 10
        };

        it('should call POST method', function () {
            service.addBill(bill).subscribe();

            const req = httpTestingController.expectOne(url);
            expect(req.request.method).toBe('POST');
            req.flush(null);

        });
    });

    afterEach(() => {
        httpTestingController.verify();
    });

});
