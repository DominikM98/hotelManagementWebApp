import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ReservationService {
    reservationUrl = 'http://localhost:3000/reservation/showReservations';
    createResUrl = 'http://localhost:3000/reservation/createReservation';
    deleteUrl = 'http://localhost:3000/reservation/deleteReservation?id=';
    roomUrl = 'http://localhost:3000/room/showRooms';

    constructor(private http: HttpClient) {

    }

    getReservations(): Observable<any>{
        return this.http.get(this.reservationUrl)
    }


    addReservation(newData: any): Observable<any> {
        return this.http.post(this.createResUrl, newData);
    }

    deleteReservation(id: any): Observable<any>{
        return this.http.delete(this.deleteUrl+id);
    }

    getRooms(): Observable<any>{
        return this.http.get(this.roomUrl)
    }

}