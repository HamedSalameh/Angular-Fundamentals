import { Child } from './child.interface';

export interface Passenger {
    id: number,
    fullname: string,
    checkedin: boolean,
    checkedInDate? : number | null,
    children?: Child[] | null
}