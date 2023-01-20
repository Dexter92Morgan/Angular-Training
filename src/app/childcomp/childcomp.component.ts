import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatatransferService } from '../service/datatransfer.service';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Input() namedata:any;
  @Input() markdata:any;
  @Input() objdata:any;

  @Output() dataupdateevent = new EventEmitter<string>();

  welcomename:any;

  // listarray =[{"name":"Ravi","mark":"250"}];
  listarray =[{"name":"","mark":""}];
  constructor(private service:DatatransferService) {

    this.listarray = this.service.GetData();

   }

  updatelist(obj:any){
    this.listarray.push(obj);
    return obj.name +" Is Added";
  }
  ngOnInit(): void {
    this.welcomename  = sessionStorage.getItem("name")!= null ? sessionStorage.getItem("name"):"";
  }

}
