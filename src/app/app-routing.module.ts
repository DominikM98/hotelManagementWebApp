import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationComponent} from "./components/reservation/reservation.component";
import {EmployeesComponent} from "./components/employees/employees.component";
import {AddEmployeeComponent} from "./components/employees/add-employee/add-employee.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";
import {RoomCleaningComponent} from "./components/room-cleaning/room-cleaning.component";
import {RoomsComponent} from "./components/rooms/rooms.component";
import {OrderComponent} from "./components/restaurant/order/order.component";
import {AddMenuItemComponent} from "./components/restaurant/add-menu-item/add-menu-item.component";
import {ClientComponent} from "./components/client/client.component";
import {TemplatePageComponent} from "./components/template-page/template-page.component";
import {AuthGuardGuard} from "./core/guards/auth-guard.guard";
import {RoleGuardGuard} from "./core/guards/role-guard.guard";
import {AddRoomComponent} from "./components/rooms/add-room/add-room.component";

const routes: Routes = [
  {
    path: 'reservation',
    component: ReservationComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin','reception_manager','receptionist']
    }
  },
  {
    path: 'restaurant',
    component: RestaurantComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin','restaurant_manager','waiter']
    }
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin','restaurant_manager','waiter']
    }
  },
  {
    path: 'roomCleaning',
    component: RoomCleaningComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin','cleaner']
    }
  },
  {
    path: 'rooms',
    component: RoomsComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin','reception_manager','receptionist']
    }
  },
  {
    path: 'addRoom',
    component: AddRoomComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin']
    }
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin']
    }
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin']
    }
  },
  {
    path: 'addMenuItem',
    component: AddMenuItemComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin']
    }
  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
   data:{
      expectedRoles: ['admin', 'reception_manager']
    }
  },
  {
    path: 'startPage',
    component: TemplatePageComponent,
    canActivate: [AuthGuardGuard, RoleGuardGuard],
    data:{
      expectedRoles: ['admin','reception_manager','receptionist','restaurant_manager','waiter','cleaner']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
