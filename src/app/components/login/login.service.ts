import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginService {
    loginUrl = 'http://localhost:3000/auth/login';
    getLoginUrl = 'http://localhost:3000/auth/users';

    constructor(private http: HttpClient) {
    }

    getLogin(): Observable<any>{
        return this.http.get(this.getLoginUrl)
    }

    checkLogin(checkData: any): Observable<any>{
        return this.http.post(this.loginUrl, checkData)
    }

}