import { Component } from '@angular/core';

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

    <passenger-dashboard></passenger-dashboard>
    `
})


export class AppComponent {

    

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