import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-appointment-schedular',
  templateUrl: './appointment-schedular.component.html',
  styleUrls: ['./appointment-schedular.component.scss'],
})
export class AppointmentSchedularComponent implements OnInit {

  waitngApprovalCount: number = 0;
  acceptedCount: number = 0;
  rejectedCount: number = 0;

  constructor(public api: ApiService, public router: Router, public alertController: AlertController) {

  }

  ngOnInit() {
    this.api.getAppointmentList().subscribe(
      data => {
        let res: any = data;
        res.filter((d) => {

          if (d.status == "W") {
            this.waitngApprovalCount += 1;
          } else if (d.status == 'T') {
            this.acceptedCount += 1;
          } else {
            this.rejectedCount += 1;
          }
        });
      }
    );
  }

  logout() {
    this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you Sure!',
      message: 'Do you want to  <strong>Logout</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }

}
