import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontchange]'
})
export class FontchangeDirective {


  constructor(private EF:ElementRef) {
    this.EF.nativeElement.style.color ="red";
    this.EF.nativeElement.style.fontSize ="20px";
   }

}
