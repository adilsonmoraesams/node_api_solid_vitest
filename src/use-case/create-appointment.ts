import { Appointment } from './../entities/appointment'; 

interface CreateAppointmentRequest{
    customer: string;
    startsAt: Date;
    endsAt: Date;
}


type CreateAppointmentReponse = Appointment;

export class CreateAppointment{

    async execute({
        customer,
        startsAt,
        endsAt
    }: CreateAppointmentRequest) : Promise<CreateAppointmentReponse> {
        const appointment = new Appointment({
            customer,
            startsAt,
            endsAt
        });

        return appointment;
    }

}