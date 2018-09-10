import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    templateUrl: 'passenger-form.component.html'
})

export class PassengerFormComponent implements OnInit {

    @Input()
    detail: Passenger;

    constructor() { }

    ngOnInit() { }

    toggleChecking(checkedin: boolean){
        if (checkedin){
            this.detail.checkedInDate = Date.now();
        }
    }
}