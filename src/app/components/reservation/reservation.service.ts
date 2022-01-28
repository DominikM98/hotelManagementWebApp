import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ReservationService {
    reservationUrl = 'http://localhost:3000/reservation/showReservations';
    createResUrl = 'http://localhost:3000/reservation/createReservation';
    deleteUrl = 'http://localhost:3000/reservation/deleteReservation'

    constructor(private http: HttpClient) {

    }

    getReservations(): Observable<any>{
        return this.http.get(this.reservationUrl)
    }


    addReservation(reser: any): Observable<any> {
        return this.http.post(this.createResUrl, reser);
    }

    deleteReservation(): Observable<any>{
        return this.http.delete(this.deleteUrl);
    }

}