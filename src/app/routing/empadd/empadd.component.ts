import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {

  empId:any;
  constructor(private route:ActivatedRoute) {

     this.empId= this.route.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
  }

}
