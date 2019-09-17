import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
    selector: 'app-about',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.scss']
})

export class AboutComponent {
    title = "Directive";

    records;
    showLoadingIndicator = false;

    constructor(private myFirstService: RecordsService) {

    }

    ngOnInit() {
        this.showLoadingIndicator = true;
        setTimeout(() => {
            this.myFirstService.getRecord()
                .subscribe((data) => {
                    this.showLoadingIndicator = false;
                    this.displaydata(data);
                }, () => this.showLoadingIndicator = false);
        }, 2000);
    }
    displaydata(data) { this.records = data };
}