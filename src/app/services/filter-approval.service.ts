import { Injectable, OnInit } from '@angular/core'; 
import { ApiService } from './api.service';
import { AppointmentModal } from '../modals/apmnt.modal';

@Injectable({
  providedIn: 'root'
})
export class FilterApprovalService implements OnInit {

  

  constructor(public api: ApiService) {

  }

  ngOnInit() {
  }


  waitingApproval() { 
   
   
  }

  acceptedApproval(){
    
  }

  rejectedApproval(){

  }

}
