export interface Passenger {
    id: number,
    fullname: string,
    checkedin: boolean,
    checkedInDate? : number,
    baggage: string
}