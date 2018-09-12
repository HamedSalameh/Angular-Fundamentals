import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit {

    passenger: Passenger;

    constructor(
        private passengerService: PassengerDashboardService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params
        .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
        .subscribe((data: Passenger) => this.passenger = data);
    }

    goBack(): void {
        this.router.navigate(['/passengers']);
    }

    onUpdatePassenger(event: Passenger) {
        console.log('passenger-viewer.onUpdatePassenger')
        console.log(' > passenger-viewer.onUpdatePassenger : ' + (JSON.stringify(event)));
        this.passengerService
            .updatePassenger(event)
            .subscribe((data: Passenger) => {
                this.passenger = Object.assign({}, this.passenger, event);
            });
    }

}