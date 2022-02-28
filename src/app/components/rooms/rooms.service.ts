import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class RoomService {
    roomUrl = 'http://localhost:3000/room/showRooms';
    createRoomUrl = 'http://localhost:3000/room/createRoom';
    deleteRoomUrl = 'http://localhost:3000/room/deleteRoom?id=';

    constructor(private http: HttpClient) {

    }

    getRooms(): Observable<any>{
        return this.http.get(this.roomUrl)
    }


    addRoom(newData: any): Observable<any> {
        return this.http.post(this.createRoomUrl, newData);
    }

    deleteRoom(id: any): Observable<any>{
        return this.http.delete(this.deleteRoomUrl+id);
    }

}