import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import * as _ from 'lodash';

@Injectable()
export class EmployeeService {
    employeeUrl = 'http://localhost:3000/employee/showEmployees';
    createEmployeeUrl = 'http://localhost:3000/employee/createEmployee';
    deleteUrl = 'http://localhost:3000/employee/deleteEmployee?id=';
    // annual leave
    annualLeaveUrl = 'http://localhost:3000/employee/showAnnualLeave';
    createAnnualLeaveUrl = 'http://localhost:3000/employee/createAnnualLeave';
    deleteAnnualLeaveUrl = 'http://localhost:3000/employee/deleteAnnualLeave?id=';
    // new user
    createNewUserUrl = 'http://localhost:3000/auth/signup';
    userUrl = 'http://localhost:3000/auth/users';

    constructor(private http: HttpClient) {
    }

    getEmployee(): Observable<any>{
        return this.http.get(this.employeeUrl)
    }


    addEmployee(newData: any): Observable<any> {
        return this.http.post(this.createEmployeeUrl, newData);
    }

    deleteEmployee(id: any): Observable<any>{
        return this.http.delete(this.deleteUrl+id);
    }


    // Annual Leave
    getAnnualLeave(): Observable<any>{
        return this.http.get(this.annualLeaveUrl)
    }

    addAnnualLeave(newData: any): Observable<any> {
        return this.http.post(this.createAnnualLeaveUrl, newData);
    }

    deleteAnnualLeave(id: any): Observable<any>{
        return this.http.delete(this.deleteAnnualLeaveUrl+id);
    }

    // User
    addUser(newData: any):Observable<any>{
        return this.http.post(this.createNewUserUrl, newData);
    }

    getUser():Observable<any>{
        return this.http.get(this.userUrl);
    }
}