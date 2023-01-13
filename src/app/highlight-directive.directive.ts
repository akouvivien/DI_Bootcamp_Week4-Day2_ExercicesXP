import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirectiveDirective  implements OnInit{
@Input('Highlight')
prix = 0
  constructor(private element:ElementRef) { }//tres important 
  ngOnInit(): void {
    if (this.prix >300) {
     this.element.nativeElement.style.backgroundColor= 'yellow'
    }
    }
  }

