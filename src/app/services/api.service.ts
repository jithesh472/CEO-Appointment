import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AppointmentModal } from '../modals/apmnt.modal';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string = "http://192.168.4.73:32768/api/";
  constructor(private http: HttpClient) { }

  getAppointmentList() {
    return this.http.get(`${this.baseURL}Appointment/GetAppointmentList`);
  }

  getUsers() {
    return this.http.get(`${this.baseURL}User/GetUsers`);
  }

  approval(data:AppointmentModal){
    return this.http.get(`${this.baseURL}Appointment/UpdateBookedappointmentStatus/${data.id}/${data.status}`);
  }


}



// APIs for CEO Appointment :-

// Login
// =============
// http://192.168.4.73:32768/api/User/GetUsers

// Book Appointment
// ====================
// http://192.168.4.73:32768/api/Appointment/InsertAppointment

// Get Book Appointment
// =========================
// http://192.168.4.73:32768/api/Appointment/GetAppointmentList


// Get Appointment By Id
// ====================================
// http://192.168.4.73:32768/api/Appointment/GetAppoinmentByID


// Approve / Reject
// ===========================================
// http://192.168.4.73:32768/api/Appointment/GetAppoinmentWithEmpID

// "http://192.168.4.73:32768/api/Appointment/UpdateBookedappointmentStatus/" + id + "/" + status + "";

