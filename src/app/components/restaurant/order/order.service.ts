import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class OrderService {
    itemMenuUrl = 'http://localhost:3000/restaurant/showItems';
    createBillUrl = 'http://localhost:3000/restaurant/createBill';

    constructor(private http: HttpClient) {

    }

    getItemMenu(): Observable<any>{
        return this.http.get(this.itemMenuUrl)
    }

    addBill(newData: any): Observable<any> {
        return this.http.post(this.createBillUrl, newData);
    }

}