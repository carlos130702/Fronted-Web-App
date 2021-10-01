import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { ClientOwnerComponent } from './client-owner/client-owner.component';
import { InformationOwnerComponent } from './information-owner/information-owner.component';
import { LoginDriverComponent } from './login-driver/login-driver.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { ReservationDriverComponent } from './reservation-driver/reservation-driver.component';
import { ReserveDriverComponent } from './reserve-driver/reserve-driver.component';

import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    DriverProfileComponent,
    ClientOwnerComponent,
    InformationOwnerComponent,
    LoginDriverComponent,
    LoginOwnerComponent,
    RegisterDriverComponent,
    RegisterOwnerComponent,
    ReservationDriverComponent,
    ReserveDriverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
