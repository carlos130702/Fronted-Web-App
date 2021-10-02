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
import { ProfileOwnerComponent } from './profile-owner/profile-owner.component';

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
    ReserveDriverComponent,
    ProfileOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
