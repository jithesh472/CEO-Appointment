export interface AppointmentModal {
    id: number;
    purpose: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    bookedBy: string;
    meetingWith: string;
    status: string;

}