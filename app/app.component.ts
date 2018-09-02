import { Component } from '@angular/core';

interface Passenger {
    id: number,
    fullname: string,
    checkedin: boolean
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
                {{ i+1 }} - {{ Passenger.fullname }}
            </li>            
        </ul>

        <h4>With web components </h4>
            <template ngFor let-passenger let-i="index" [ngForOf]="Passengers">
                <ul>
                    <li>
                        {{ i+1 }} : {{ passenger.fullname }}
                    </li>
                </ul>
            </template>
    </div>
    `
})


export class AppComponent {

    Passengers: Passenger[] = [{
        id: 1,
        fullname: 'Hamed',
        checkedin: false
    },
    {
        id: 2,
        fullname: 'Nada',
        checkedin: false
    }];

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