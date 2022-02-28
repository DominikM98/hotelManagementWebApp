import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class OrderService {
    itemMenuUrl = 'http://localhost:3000/restauration/showItems';

    constructor(private http: HttpClient) {

    }

    getItemMenu(): Observable<any>{
        return this.http.get(this.itemMenuUrl)
    }

}