import { Component, OnInit } from '@angular/core';
import { AppointmentModal } from '../modals/apmnt.modal';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.scss'],
})
export class SchedularComponent implements OnInit {

  waitingApproval: AppointmentModal[] = [];

  constructor(public api: ApiService, public alertController: AlertController) { }

  ngOnInit() {
    this.getList()
  }
  getList() {
    this.api.getAppointmentList().subscribe(data => {
      let result: any = data;
      result.filter(res => { if (res.status === "W") { this.waitingApproval.push(res) } });
    }, err => {
      console.log(`${err.status} - ${err.statusTest}`)
    });
  }

  acceptApmnt(data: AppointmentModal, isAccepted: string) {

    data.status = isAccepted;

    let res = this.api.approval(data);

  }

  async presentAlert(name, approval) {
    const alert = await this.alertController.create({
      header: `${approval}`,
      message: `Appointment with <b>${name}</b> ${approval}!`,
      buttons: ['OK'],
      animated: true
    });

    await alert.present();
  }

  async showDetail(data: AppointmentModal) {
    const alert = await this.alertController.create({
      message: `<div class="text-left">Meeting With: <b>${data.meetingWith}</b><br>
      Meeting Date: <b>${data.date}</b><br>
      Start Time: <b>${data.startTime}</b><br>
       End Time: <b> ${data.endTime}</b><br>
       Purpose:<b>${data.purpose}</b><br>
       Booked by:<b>${data.bookedBy}</b>
      </div>
    `,
      buttons: ['OK']
    });
    await alert.present();

  }



}

