import { Component, OnInit } from '@angular/core';
import { AppointmentModal } from '../../modals/apmnt.modal';
import { ApiService } from '../../services/api.service';
import { FilterApprovalService } from '../../services/filter-approval.service';

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.scss'],
})
export class AppointmentRejectComponent implements OnInit {

  rejected: AppointmentModal[] = [];


  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getAppointmentList().subscribe(data => {
      let result:  any = data;
      result.filter(res => { if (res.status === "F") { this.rejected.push(res) } });
    }, err => {
      console.log(`${err.status} - ${err.statusTest}`)
    });
  }

}
