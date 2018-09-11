import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {

    passenger: Passenger;

    constructor(private passengerService: PassengerDashboardService) {

    }

    ngOnInit() {
        this.passengerService
            .getPassenger(3)
            .subscribe((data: Passenger) => {
                this.passenger = data
            });

    }

    onUpdatePassenger(event: Passenger) {
        console.log('passenger-viewer.onUpdatePassenger')
        console.log(' > passenger-viewer.onUpdatePassenger : ' + (JSON.stringify(event)));
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger)=> {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }

}