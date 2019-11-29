import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AppointmentSchedularComponent } from './appointment-schedular/appointment-schedular.component';
import { FormsModule } from '@angular/forms';
import { SchedularComponent } from './schedular/schedular.component';
import { AcceptComponent } from './accept/accept.component';
import { RejectComponent } from './reject/reject.component';
import { HomeComponent } from './home/home.component';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    AppointmentSchedularComponent, 
    SchedularComponent, 
    AcceptComponent, 
    RejectComponent,
    HomeComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    NgCalendarModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
