import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-details',
    templateUrl: 'passenger-details.component.html',
    styleUrls: ['passenger-details.component.scss']
})
export class PassengerDetailsComponent {

    @Input()
    detail: Passenger;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    editing: boolean;

    constructor() {

    }

    OnNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    OnRemove() {
        this.remove.emit(this.detail);
    }

}