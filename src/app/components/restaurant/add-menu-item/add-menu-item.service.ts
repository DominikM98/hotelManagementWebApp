import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
@Injectable()
export class ItemMenuService {
    itemMenuUrl = 'http://localhost:3000/restaurant/showItems';
    createItemMenuUrl = 'http://localhost:3000/restaurant/createItemMenu';
    deleteItemMenuUrl = 'http://localhost:3000/restaurant/deleteItemMenu?id=';

    constructor(private http: HttpClient) {

    }

    getItemMenu(): Observable<any>{
        return this.http.get(this.itemMenuUrl)
    }


    addItemMenu(newData: any): Observable<any> {
        return this.http.post(this.createItemMenuUrl, newData);
    }

    deleteItemMenu(id: any): Observable<any>{
        return this.http.delete(this.deleteItemMenuUrl+id);
    }

}