import { Appointment } from './../entities/appointment';
import { CreateAppointment } from './create-appointment';
import { describe, expect, it } from "vitest";
import { getFutureDate } from '../tests/utils/get-future-date';

describe('Create Appointment', () =>{
    it('Should be able to create an appointment...', ()=>{
        const createAppointment = new CreateAppointment()

        const startsAt = getFutureDate('2022-09-10');
        const endsAt = getFutureDate('2022-09-11');

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    });

});