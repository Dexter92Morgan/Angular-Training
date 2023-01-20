import { Component, ViewChild } from '@angular/core';
import { MasterService } from './service/master.service';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { DatatransferService } from './service/datatransfer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome Preetham';
  length:number = 50;
  b =5;

  //Event Handling
  GetDatanumber(data:number){
    alert('Records are Loaded ' + data);
  }

  GetDatastring(data:string){
    alert('Records are Loaded ' + data);
  }

  GetDataAny(data:any){
    alert('Records are Loaded ' + data);
  }

  GetDataKeyup(data:any){
    console.log(data);
  }

  GetDataKeydown(data:any){
    console.log(data);
  }

  GetDatablur(data:any){
    console.log(data);
  }

  GetDatamouseover(data:any){
    console.log(data);
  }

  GetDatavalue(data:any){
    console.log(data);
  }

  itemdisabled = true;

  clolr = "blue";
  fontsize ="50px";

  // for Array
  userlist:any;
   // for Api
   emplist:any;
  constructor(private service: MasterService, private serv: DatatransferService) { 
    // this.userlist = this.service.GetUserData();
    console.log(this.userlist);

     this.service.GetApiData().subscribe(result=>{
      this.emplist = result;
    });

    //statemanangement
    sessionStorage.setItem("name","preetamgowda");
  }
  
    //Data transfer
    @ViewChild(ChildcompComponent) viewdata !: ChildcompComponent

    inputname =''
    markname=''
    inputobject={"name":"","mark":""}
    response: any;

    TransferData(name:any,mark:any){
      // this.inputname = name
      // this.markname = mark;
      this.inputobject = {"name": name, "mark": mark};
      // this.response = this.viewdata.updatelist(this.inputobject);
      this.serv.SaveData(this.inputobject);
    }

    Updatetitle(title:any){
          this.title= title;
    }
}
