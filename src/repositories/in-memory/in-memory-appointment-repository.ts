import { Appointment } from './../../entities/appointment';
import { AppointmentsRepository } from './../appointments-repository';
import { areIntervalsOverlapping, getOverlappingDaysInIntervals } from 'date-fns';

export class InMemoryAppointmentRepository implements AppointmentsRepository {
    public items: Appointment[] = [];

    async create(appointment: Appointment): Promise<void> {
        this.items.push(appointment);
    }

    async findOverlappingAppointment(startsAt: Date, endsAt: Date): Promise<Appointment | null> {
        const overlappingDaysInIntervals = this.items.find(appointment => {
            return areIntervalsOverlapping(
                { start: startsAt, end: endsAt },
                { start: appointment.startsAt, end: appointment.endsAt },
                { inclusive: true }
            );
        })

        if (!overlappingDaysInIntervals) {
            return null;
        }
        return overlappingDaysInIntervals;
    }
}