import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  title ='Directive in Angular';
  constructor() { }

  ngOnInit(): void {
  }
  Classname = 'special';
  isSpecial = true;

  style={
    'font-style': 'italic',
    'color':'blue'
  }

  inputvalue = 'test';

  datachange(){
    console.log(this.inputvalue);
  }

  country = ['india','australia','england'];

  people:any[]=[
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
}
