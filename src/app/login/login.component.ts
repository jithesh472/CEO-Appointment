import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
declare var require: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: false }) form: any;

  constructor(private api: ApiService, private route: Router, public toastController: ToastController) { }

  ngOnInit() {

  }

  onSubmit() {
    var CryptoJs = require('crypto-js');
    let userName = this.form.value.userName;
    let password = this.form.value.password;
    let isFetched: boolean = false;
    this.api.getUsers().subscribe(data => {
      let userList: any = data;
      userList.filter(account => {
        if (account.userName === userName) {
          let hash = CryptoJs.SHA256(password);
          let encPass = hash.toString(CryptoJs.enc.Base64);
          if (encPass == account.password) {
            isFetched = true;
          }
        }
        if (isFetched) {
          // this.presentToast().then(() => { this.form.reset(); this.route.navigate(['/apmnt-schedular']) });
          this.presentToast().then(() => { this.form.reset(); this.route.navigate(['/appointment/home']) });
        } else {
          this.errorToast();
        }
      }, err => {
        console.log('Something goes wrong!')
      });
    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You have been logged successfully.',
      duration: 1200,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastController.create({
      message: '<b>User Name / password is Wrong.</b>',
      duration: 2000,
      position: 'top',
      color: 'danger'
    });
    toast.present();
  }
}

