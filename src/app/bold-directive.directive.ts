import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[Bold]'
})
export class BoldDirectiveDirective  implements OnInit{

    constructor(private element:ElementRef) { }
    ngOnInit(): void {
       this.element.nativeElement.style.fontWeight= 'bold'
      }
    }
  


