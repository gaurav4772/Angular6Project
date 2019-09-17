import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RecordsService } from '../records.service';

import { AboutComponent } from './about.component';
import { changeTextDirective } from '../directive/change-text.directive';

@NgModule({
    declarations: [
        AboutComponent,
        changeTextDirective
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [RecordsService]
})

export class AboutModule { }