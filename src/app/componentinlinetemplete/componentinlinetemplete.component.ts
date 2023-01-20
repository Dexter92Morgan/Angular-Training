import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentinlinetemplete',
  template: `
    <h2>
      Inline Template Component works!
    </h2>
  `,
  styleUrls: ['./componentinlinetemplete.component.css']
})
export class ComponentinlinetempleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
