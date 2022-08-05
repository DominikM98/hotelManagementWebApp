import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ReservationService {
    reservationUrl = 'http://localhost:3000/reservation/showReservations';
    createReservationUrl = 'http://localhost:3000/reservation/createReservation';
    deleteReservationUrl = 'http://localhost:3000/reservation/deleteReservation?id=';

    roomUrl = 'http://localhost:3000/room/showRooms';

    createClientUrl = 'http://localhost:3000/client/createClient';
    clientUrl = 'http://localhost:3000/client/showClients';

    mobileReservationUrl = 'http://localhost:3000/mobileReservation/showReservations';
    deleteMobileReservationUrl = 'http://localhost:3000/mobileReservation/deleteReservation?id=';

    constructor(private http: HttpClient) {

    }

    getReservations(): Observable<any>{
        return this.http.get(this.reservationUrl)
    }

    addReservation(newData: any): Observable<any> {
        return this.http.post(this.createReservationUrl, newData);
    }

    deleteReservation(id: any): Observable<any>{
        return this.http.delete(this.deleteReservationUrl+id);
    }

    getRooms(): Observable<any>{
        return this.http.get(this.roomUrl)
    }

    getClients(): Observable<any>{
        return this.http.get(this.clientUrl)
    }

    addClient(newData: any): Observable<any> {
        return this.http.post(this.createClientUrl, newData);
    }

    getMobileReservations(): Observable<any>{
        return this.http.get(this.mobileReservationUrl)
    }

    deleteMobileReservation(id: any): Observable<any>{
        return this.http.delete(this.deleteMobileReservationUrl+id);
    }

}