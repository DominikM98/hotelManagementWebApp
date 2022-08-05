import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class MobileSectionService {
    getData = 'http://localhost:3000/showInformationHotel';
    updateData = 'http://localhost:3000/updateInformationHotel';

    getMobileClients = 'http://localhost:3000/mobileAuth/users';
    deleteMobileClients = 'http://localhost:3000/mobileClient/deleteMobileClient?id=';

    getRating = 'http://localhost:3000/showReviewsHotel';

    constructor(private http: HttpClient) {

    }

    getHotelsData(): Observable<any>{
        return this.http.get(this.getData)
    }

    updateHotelsData(newData: any): Observable<any>{
        return this.http.put(this.updateData, newData)
    }

    getMobileUsers(): Observable<any>{
        return this.http.get(this.getMobileClients)
    }

    deleteMobileUsers(id: any): Observable<any>{
        return this.http.delete(this.deleteMobileClients+id)
    }

    getRatings():Observable<any>{
        return this.http.get(this.getRating)
    }

}