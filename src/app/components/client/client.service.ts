import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ClientService {
    clientUrl = 'http://localhost:3000/client/showClients';
    deleteUrl = 'http://localhost:3000/client/deleteClient?id=';

    constructor(private http: HttpClient) {
    }

    getClient(): Observable<any>{
        return this.http.get(this.clientUrl)
    }


    deleteClient(id: any): Observable<any>{
        return this.http.delete(this.deleteUrl+id);
    }



}