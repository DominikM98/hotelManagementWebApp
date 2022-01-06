import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuContextComponent } from './components/menu-context/menu-context.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule, ChartSimpleModule, WavesModule, ButtonsModule, IconsModule} from 'ng-uikit-pro-standard';
import {TableModule } from 'ng-uikit-pro-standard';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { ModifyEmployeeComponent } from './components/employees/modify-employee/modify-employee.component';
import {SchedulerModule} from "./components/reservation/scheduler/scheduler.module";
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RoomCleaningComponent } from './components/room-cleaning/room-cleaning.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ModifyRoomsComponent } from './components/rooms/modify-rooms/modify-rooms.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/restaurant/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HomeComponent,
    NavbarComponent,
    MenuContextComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    ModifyEmployeeComponent,
    RestaurantComponent,
    RoomCleaningComponent,
    RoomsComponent,
    ModifyRoomsComponent,
    LoginComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule, ChartSimpleModule, WavesModule, ButtonsModule,
    TableModule,
    SchedulerModule, IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
