import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[appChangeText]'
})

export class changeTextDirective implements AfterViewInit {
    constructor(private Element: ElementRef){

    }
    
    ngAfterViewInit() {
        this.Element.nativeElement.innerHTML = "Text is changed by changeText Directive.";
    }
}