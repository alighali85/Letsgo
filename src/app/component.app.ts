import { Component } from '@angular/core';

@Component( {
    selector: 'ali',
    templateUrl: './partials/app.html',
    styleUrls: [ "./css/app.css" ]
} )

export class AppComponent {
    name: string;
    artists: any;

    constructor() {

        this.name = 'HERE IS THE NAME';

        this.artists = [
            { name: 'haroult mcoaier', school: 'New jercy' },
            { name: 'Nilly Fortado', school: 'alabama school' },
            { name: 'Bony Moneh', school: 'Arizona school' }
        ];
    }
}