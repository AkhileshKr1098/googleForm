import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {

  constructor(
    private el :  ElementRef
  ) {
    el.nativeElement.style.color="red"
   }



}
