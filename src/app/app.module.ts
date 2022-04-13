//External Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule, ChartSimpleModule, WavesModule, ButtonsModule, IconsModule} from 'ng-uikit-pro-standard';
import {TableModule } from 'ng-uikit-pro-standard';
import {SchedulerModule} from "./components/reservation/scheduler/scheduler.module";

//Internal Module
import {EmployeesModule} from "./components/employees/employees.module";
import {RestaurantModule} from "./components/restaurant/restaurant.module";
import {TemplatePageModule} from "./components/template-page/template-page.module";
import {RoomsModule} from "./components/rooms/rooms.module";

//Component
import { AppComponent } from './app.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RoomCleaningComponent } from './components/room-cleaning/room-cleaning.component';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './components/client/client.component';


@NgModule({
    declarations: [
        AppComponent,
        ReservationComponent,
        RoomCleaningComponent,
        LoginComponent,
        ClientComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        ChartsModule, ChartSimpleModule, WavesModule, ButtonsModule,
        TableModule,
        SchedulerModule, IconsModule, ReactiveFormsModule,
        EmployeesModule,
        RestaurantModule,
        TemplatePageModule,
        RoomsModule
    ],
    providers:[],
    bootstrap: [AppComponent]
})

export class AppModule { }
