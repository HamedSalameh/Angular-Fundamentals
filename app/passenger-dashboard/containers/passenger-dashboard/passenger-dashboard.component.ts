import { Component, OnInit } from '@angular/core';

import { Passenger} from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: [
        'passenger-dashboard.component.scss'
    ],
    templateUrl: 'passenger-dashboard.component.html'
})

export class PassengerDashboardComponent implements OnInit {

    Passengers: Passenger[];

    constructor(){}

    ngOnInit(){
        this.Passengers = [{
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

    handleRemove(event: Passenger){
        this.Passengers = this.Passengers.filter((passenger: Passenger) => {
            // The filter method will return a new array with the items that pass our particular test
            return passenger.id !== event.id
        });
    }

    handleEdit(event: Passenger){

        this.Passengers = this.Passengers.map((passenger: Passenger) => {
            if (passenger.id === event.id){
                // Object.assign method: In this form, creates a new empty object, then merges the changes from the following object into it
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        });

    }

}