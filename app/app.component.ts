import { Component } from '@angular/core';

interface Nav {
    link: string,
    name: string,
    exact: boolean
}

@Component({
    selector: 'app-root',
    styleUrls: [
        'app.component.scss'
    ],
    templateUrl: 'app.component.html'
})


export class AppComponent {
    title: string;
    name: string = '';

    nav: Nav[] = [
        {
            link: '/',
            name: 'Home',
            exact: true
        },
        {
            link: '/passengers',
            name: 'Passengers',
            exact: false
        },
        {
            link: '/oops',
            name: '404',
            exact: false
        }
    ]

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