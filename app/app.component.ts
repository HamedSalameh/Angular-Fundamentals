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
        <input type='text' [value]='name' />
    </div>
    `
})
export class AppComponent {
  title: string;
  name: string = 'Hammed';
  constructor(){
      this.title = 'Ultimate Angular';
  }
}