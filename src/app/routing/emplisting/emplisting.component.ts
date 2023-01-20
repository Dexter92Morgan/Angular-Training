import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-emplisting',
  templateUrl: './emplisting.component.html',
  styleUrls: ['./emplisting.component.css']
})
export class EmplistingComponent implements OnInit {

  emplist:any;
  constructor(private service:MasterService) {

      this.service.GetApiData().subscribe(result=>{

          this.emplist = result;
      });
   }

  ngOnInit(): void {
  }

}
