import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationComponent} from "./components/reservation/reservation.component";
import {HomeComponent} from "./components/home/home.component";
import {EmployeesComponent} from "./components/employees/employees.component";
import {AddEmployeeComponent} from "./components/employees/add-employee/add-employee.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {RoomCleaningComponent} from "./components/room-cleaning/room-cleaning.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {OrderComponent} from "./components/restaurant/order/order.component";
import {AddMenuItemComponent} from "./components/restaurant/add-menu-item/add-menu-item.component";

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
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'addMenuItem',
    component: AddMenuItemComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
