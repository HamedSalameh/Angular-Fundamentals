import { Component } from '@angular/core';

interface Child {
    name: string,
    age: number
}

interface Passenger {
    id: number,
    fullname: string,
    checkedin: boolean,
    checkedInDate? : number | null,
    children?: Child[] | null
}

@Component({
    selector: 'app-root',
    styleUrls: [
        'app.component.scss'
    ],
    template: `
    <div>
        {{ title }}

    </div>
    <div>
        <button (click)='changeName()' >Change name</button>
        <input 
            type='text'         
            [ngModel]="name"
            (ngModelChange)="handleChange($event)">

        <input 
        type='text'         
        [(ngModel)]="name"
        >
    </div>

    <template  [ngIf]="name.length > 3">
        <div>
            Searching for .. {{ name }}
        </div>
    </template>

    <div *ngIf='name.length > 2'>
        Searching for ...{{ name }}
    </div>

    <div>

        <h3>Airline Passengers</h3>
        <ul>
            <li *ngFor='let Passenger of Passengers;let i = index;'>
                <span 
                class='status'
                [ngClass]="{ 'checked-in': Passenger.checkedin }"
                ></span>
                {{ i+1 }} - {{ Passenger.fullname }}
                <p>
                    {{ Passenger | json }}
                </p>
                <div class='date'>
                    Check in Date: {{ Passenger.checkedInDate ? (Passenger.checkedInDate | date: 'MMMM d, y') : 'Not Checked In' }}
                </div>
                <div class='children'>
                    Children: {{ Passenger?.children?.length || 0 }}
                </div>
            </li>            
        </ul>
    </div>
    `
})


export class AppComponent {

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

    title: string;
    name: string = '';
    constructor() {
        this.title = 'Ultimate Angular';
    }

    handleChange(event: any) {
        this.name = event;
    }

    changeName() {
        this.name = 'reset';
    }

}