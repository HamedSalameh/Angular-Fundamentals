import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

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
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean;

    constructor() {

    }

    goToPassenger(): void {
        this.view.emit(this.detail);
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