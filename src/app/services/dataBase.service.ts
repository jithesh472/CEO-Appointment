import { AppointmentModal } from '../modals/apmnt.modal'
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataBaseService {
    data: AppointmentModal[]; 
    constructor() {
        // this.data = [
        //     {
        //         id: 1,
        //         meetingWith: 'Sanjeev patil',
        //         bookedBy: 'Jhon',
        //         purpose: 'Discussion about Internal Project',
        //         approvalStatus: null,
        //         meetingStart: new Date(),
        //         meetingEnd: new Date()
        //     },
        //     {
        //         id: 2,
        //         meetingWith: 'Virat Kohli',
        //         bookedBy: 'Tony',
        //         purpose: 'Stand up Meeting',
        //         approvalStatus: true,
        //         meetingStart: new Date(),
        //         meetingEnd: new Date()
        //     },
        //     {
        //         id: 3,
        //         meetingWith: 'MS Dhoni',
        //         bookedBy: 'Moody',
        //         purpose: 'New Project discussion',
        //         approvalStatus: null,
        //         meetingStart: new Date(),
        //         meetingEnd: new Date()
        //     },
        //     {
        //         id: 4,
        //         meetingWith: 'Rohit Sharma',
        //         bookedBy: 'Tony',
        //         purpose: 'HR policy updation',
        //         approvalStatus: false,
        //         meetingStart: new Date(),
        //         meetingEnd: new Date()
        //     },
        //     {
        //         id:5,
        //         meetingWith: 'Jasprit bhoomra',
        //         bookedBy: 'Nicolus',
        //         purpose: 'Sports event',
        //         approvalStatus: null,
        //         meetingStart: new Date(),
        //         meetingEnd: new Date()
        //     }
        // ];
    }

}