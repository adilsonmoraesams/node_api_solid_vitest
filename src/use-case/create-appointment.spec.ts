import { InMemoryAppointmentRepository } from './../repositories/in-memory/in-memory-appointment-repository';
import { Appointment } from './../entities/appointment';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from "vitest";
import { getFutureDate } from '../tests/utils/get-future-date';

describe('Create Appointment', () => {  
    it('Should not be able to create an appointment with overlapping dates', async () => {
        const startsAt = getFutureDate('2022-09-10');
        const endsAt = getFutureDate('2022-09-15');

        const appointmentRepository = new InMemoryAppointmentRepository();
        const createAppointment = new CreateAppointment(
            appointmentRepository
        );

        await createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        });

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt: getFutureDate('2022-09-14'),
            endsAt: getFutureDate('2022-09-18')
        }))
        .rejects.toBeInstanceOf(Error);

    });

});