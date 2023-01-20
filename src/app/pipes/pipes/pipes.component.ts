import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  titles = 'pipes working';

  Amount =2200.12152;

  currentdate = new Date();

  percentage = 0.098;

  slice = 'welcome to Angular 13 turorial Preetham';

  jsonformat:any[]=[
    {
      "name":"preetjham",
      "age":20,
      "country":"India"
    },
    {
      "name":"preetjham2",
      "age":20,
      "country":"Englai"
    },
    {
      "name":"preetjham3",
      "age":20,
      "country":"agrica"
    },
    {
      "name":"preetjham",
      "age":20,
      "country":"India  "
    }
  ];

  rate = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
