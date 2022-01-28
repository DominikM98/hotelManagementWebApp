import {Injectable} from '@angular/core';
import {DayPilot} from 'daypilot-pro-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {


  resources: any[] = [
    { name: 'I floor', id: 'firstFloor', expanded: true, children: [
      { name: '101', id: 'R101' },
      { name: '102', id: 'R102' },
      { name: '103', id: 'R103' },
      { name: '104', id: 'R104' }
    ]},
    { name: 'II floor', id: 'secondFloor', expanded: true, children: [
      { name: '201', id: 'R201'},
      { name: '202', id: 'R202'},
      { name: '203', id: 'R203'}
    ]}
  ];

  events: any[] = [
    {
      id: '1',
      resource: 'R101',
      start: '2021-12-30',
      end: '2022-01-05',
      text: 'Jonathan Jepp',
      color: '#e69138'
    },
    {
      id: '2',
      resource: 'R103',
      start: '2022-01-15',
      end: '2022-01-20',
      text: 'Grzegorz Byk',
      color: '#e69138'
    },
    {
      id: '3',
      resource: 'R201',
      start: '2022-01-10',
      end: '2022-01-15',
      text: 'Grupa',
      color: '#00e693'
    },
    {
      id: '4',
      resource: 'R202',
      start: '2022-01-10',
      end: '2022-01-15',
      text: 'Grupa',
      color: '#00e693'
    },
    {
      id: '5',
      resource: 'R203',
      start: '2022-01-10',
      end: '2022-01-15',
      text: 'Grupa',
      color: '#00e693'
    }
  ];

  constructor(private http: HttpClient) {
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

    // return this.http.get("/api/events?from=" + from.toString() + "&to=" + to.toString());
  }

  getResources(): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.resources);
      }, 200);
    });

    // return this.http.get("/api/resources");
  }

}
