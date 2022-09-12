import { Appointment } from './../entities/appointment';

export interface AppointmentsRepository {
    create(Appointment): Promise<void>;
    findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> 
}