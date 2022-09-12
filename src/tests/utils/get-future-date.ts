import { setYear, parseISO } from 'date-fns';

/*
* Received "2022-09-11" and returns "2023-09-11"
*/
export function getFutureDate(date: string) : Date {
    return setYear(parseISO(date), new Date().getFullYear() + 1);
}

