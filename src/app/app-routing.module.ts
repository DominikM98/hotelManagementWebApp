import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservationComponent} from "./components/reservation/reservation.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
