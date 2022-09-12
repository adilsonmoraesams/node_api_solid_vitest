import { getOverlappingDaysInIntervals } from 'date-fns';
import { AppointmentsRepository } from './../repositories/appointments-repository';
import { Appointment } from './../entities/appointment'; 

interface CreateAppointmentRequest{
    customer: string;
    startsAt: Date;
    endsAt: Date;
}


type CreateAppointmentReponse = Appointment;

export class CreateAppointment{

    constructor(
        private appointmentsRepository:AppointmentsRepository
    ){

    }

    async execute({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmentRequest) : Promise<CreateAppointmentReponse> {

        const overlappingAppointment = await this.appointmentsRepository.findOverlappingAppointment(
            startsAt,
            endsAt
        );

        if(overlappingAppointment){
            throw new Error('Another appointment overlaps this appointment dates');
        }

        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt
        });

        await this.appointmentsRepository.create(appointment);

        return appointment;
    }

}