import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    templateUrl: 'passenger-form.component.html'
})

export class PassengerFormComponent implements OnInit {

    @Input()
    detail: Passenger;

    @Output()
    update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggae'
    },
    {
        key: 'hand-only',
        value: 'Hand Baggage'
    },
    {
        key: 'hand-hold',
        value: 'Hand and hold baggae'
    }]

    constructor() { }

    ngOnInit() { }

    toggleChecking(checkedin: boolean) {
        if (checkedin) {
            this.detail.checkedInDate = Date.now();
        }
    }

    handleSubmit(passenger: Passenger, isValid){
        if(isValid){
            this.update.emit(passenger);
        }
    }
}