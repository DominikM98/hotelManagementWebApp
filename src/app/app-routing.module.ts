import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationComponent} from "./components/reservation/reservation.component";
import {HomeComponent} from "./components/home/home.component";
import {EmployeesComponent} from "./components/employees/employees.component";
import {AddEmployeeComponent} from "./components/employees/add-employee/add-employee.component";
import {ModifyEmployeeComponent} from "./components/employees/modify-employee/modify-employee.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {RoomCleaningComponent} from "./components/room-cleaning/room-cleaning.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {ModifyRoomsComponent} from "./components/rooms/modify-rooms/modify-rooms.component";
import {OrderComponent} from "./components/restaurant/order/order.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'roomCleaning',
    component: RoomCleaningComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'modifyRooms',
    component: ModifyRoomsComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'modifyEmployee',
    component: ModifyEmployeeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
