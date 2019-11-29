import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppointmentSchedularComponent } from './appointment-schedular/appointment-schedular.component';
import { SchedularComponent } from './schedular/schedular.component';
import { AcceptComponent } from './accept/accept.component';
import { RejectComponent } from './reject/reject.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,    
    children: [
      {
        path: 'apmnt-schedular',
        component: AppointmentSchedularComponent,
      },
      {
        path: '',
        component: SchedularComponent
      },
      {
        path: 'schedular',
        component: SchedularComponent
      },
      {
        path: 'accept',
        component: AcceptComponent
      },
      {
        path: 'reject',
        component: RejectComponent
      }
    ]
  } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
