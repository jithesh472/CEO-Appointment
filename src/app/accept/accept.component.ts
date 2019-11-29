import { Component, OnInit } from '@angular/core';
import { AppointmentModal } from '../modals/apmnt.modal';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss'],
})
export class AcceptComponent implements OnInit {
  accpted: AppointmentModal[]=[];
  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getAppointmentList().subscribe(data => {
      let result: any = data;
      result.filter(res => { if (res.status === "T") { this.accpted.push(res) } });
    }, err => {
      console.log(`${err.status} - ${err.statusTest}`)
    });
  }

}
