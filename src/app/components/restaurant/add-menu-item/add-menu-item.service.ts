import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {map} from 'rxjs/operators';

@Injectable()
export class ItemMenuService {
    itemMenuUrl = 'http://localhost:3000/restauration/showItems';
    createItemMenuUrl = 'http://localhost:3000/restauration/createItemMenu';
    deleteItemMenuUrl = 'http://localhost:3000/restauration/deleteItemMenu';

    constructor(private http: HttpClient) {

    }

    getItemMenu(): Observable<any>{
        return this.http.get(this.itemMenuUrl)
    }


    addItemMenu(reser: any): Observable<any> {
        return this.http.post(this.createItemMenuUrl, reser);
    }

    deleteItemMenu(): Observable<any>{
        return this.http.delete(this.deleteItemMenuUrl);
    }

}