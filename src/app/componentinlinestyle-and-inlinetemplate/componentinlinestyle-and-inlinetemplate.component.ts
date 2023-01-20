import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentinlinestyle-and-inlinetemplate',
  template: `
    <h2 class="cssheader">
      Inline Style with Inline Template works!
    </h2>
  `,
  styles: [
    '.cssheader{color:yellow}'
  ]
})
export class ComponentinlinestyleAndInlinetemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
