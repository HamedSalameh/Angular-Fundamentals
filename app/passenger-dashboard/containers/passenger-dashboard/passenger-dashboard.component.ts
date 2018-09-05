import { Component } from '@angular/core';

import { Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: [
        'passenger-dashboard.component.scss'
    ],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent {

    Passengers: Passenger[] = [{
        id: 1,
        fullname: 'Hamed',
        checkedin: false,
        checkedInDate: null
    },
    {
        id: 2,
        fullname: 'Nada',
        checkedin: false,
        checkedInDate: null
    },
    {
        id: 3,
        fullname: 'Jenn',
        checkedin: true,
        checkedInDate: 14907420000
    }
];

}