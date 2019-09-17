import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent {
    model: any = {};

    onSubmit() {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    }
}