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
    
    <div class=''>
        <passenger-dashboard></passenger-dashboard>
        <hr>
        <passenger-viewer></passenger-viewer>
    </div>
    
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