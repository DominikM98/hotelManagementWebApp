import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class EmployeeService {
    employeeUrl = 'http://localhost:3000/employee/showEmployees';
    createEmployeeUrl = 'http://localhost:3000/employee/createEmployee';
    deleteUrl = 'http://localhost:3000/employee/deleteEmployee?id=';

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

}