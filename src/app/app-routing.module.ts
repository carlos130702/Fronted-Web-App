import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { ReservationDriverComponent } from './reservation-driver/reservation-driver.component';
import { ReserveDriverComponent } from './reserve-driver/reserve-driver.component';
import { InformationOwnerComponent } from './information-owner/information-owner.component';
import { LoginDriverComponent } from './login-driver/login-driver.component';
import { LoginOwnerComponent } from './login-owner/login-owner.component';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';

const routes: Routes = [
  { path: 'driver-profile', component: DriverProfileComponent},
  { path: 'reserve-driver', component: ReserveDriverComponent},
  { path: 'reservation-driver', component: ReservationDriverComponent},
  { path: 'information-owner', component: InformationOwnerComponent},
  { path: 'login-owner', component: LoginOwnerComponent},
  { path: 'login-driver', component: LoginDriverComponent},
  { path: 'register-owner', component: RegisterOwnerComponent},
  { path: 'register-driver', component: RegisterDriverComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }