import { Component, OnInit, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';

declare var require: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

  minDate = new Date().toISOString();

  eventSource = [];
  events=[];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };



  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string, private activatedRoute: ActivatedRoute,public api: ApiService) { }

  ngOnInit() {
    this.resetEvent();
    this.loadScheduler();
  }

    //load scheduler data.
     loadScheduler() {
        let displayEventCopy;
        let startTime;
        let endTime;
      this.api.getAppointmentList().subscribe(data => {
        let result:  any = data;
        result.filter(res => { 
           //code here
           if(res.status === 'T'){
            startTime = new Date(res.date + " " + res.startTime);
            endTime = new Date(res.date + " " + res.endTime);
            displayEventCopy = { "title": res.purpose, "startTime": startTime, "endTime": endTime, "allDay": false, "desc": "", "bookedBy": res.bookedBy, "meetingWith": res.meetingWith, "status": res.status };
            this.eventSource.push(displayEventCopy);
            this.myCal.loadEvents();
            this.resetEvent();
            console.log(res);
           }
      });
     }, err => {
        console.log(`${err.status} - ${err.statusTest}`)
      });
     }


  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  next() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }

  back() {
    var swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
    let apptStatus;
    if (event.status === 'T') {
      apptStatus = "Approved";
    } else if (event.status === 'F') {
      apptStatus = "Cancelled";
    } else if (event.status === 'W') {
      apptStatus = "Waiting For Approval";
    }
    const alert = await this.alertCtrl.create({
      header: "Info",
      subHeader: event.desc,
      message: `<div class="text-left">From: <b>${start}</b><br>
      To: <b>${end}</b><br>
      Appointment Taken By: <b>${event.bookedBy}</b><br>
      Purpose: <b> ${event.title}</b><br>
      Status:<b class="text-success">${apptStatus}</b><br>
      </div>
    `,
      buttons: ['OK']
    });
    alert.present();
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }
  callenderShow: any = false;
  //constructor(private activatedRoute: ActivatedRoute) {}


}

