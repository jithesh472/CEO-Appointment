import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppointmentAcceptComponent } from './appointments/accept/accept.component';
import { AppointmentRejectComponent } from './appointments/reject/reject.component';
import { AppointmentHomeComponent } from './appointments/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'appointment/home', component: AppointmentHomeComponent },
  { path: 'appointment/accept', component: AppointmentAcceptComponent },
  { path: 'appointment/reject', component: AppointmentRejectComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
