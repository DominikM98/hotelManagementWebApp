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
import { ChartsModule, ChartSimpleModule, WavesModule } from 'ng-uikit-pro-standard'


@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HomeComponent,
    NavbarComponent,
    MenuContextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
      FormsModule,
    ChartsModule, ChartSimpleModule, WavesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
