import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentinline',
  templateUrl: './componentinline.component.html',
  styles: [
    '.headercss{color:red}'
  ]
})
export class ComponentinlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
