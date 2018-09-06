import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-count',
    templateUrl: 'passenger-count.component.html',
    styleUrls: ['passenger-count.component.scss']
})
export class PassengerCountComponent {

    @Input()
    items: Passenger[];

    constructor(){

    }

    checkedInCount(): number {
        if (!this.items) return;

        return this.items.filter( (passenger: Passenger) => {
            return passenger.checkedin;
        }).length;
    }

}