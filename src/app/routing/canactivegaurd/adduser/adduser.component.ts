import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  havechanges = false;
  textchange(name: any) {
    if (name == '') {
      this.havechanges = false;
    } else {
      this.havechanges = true;
    }
  }

  canActivate(){
    if(this.havechanges){

      if(confirm('You have not Saved Changes, Do you want to navigate?')){

        return true;
      }else{
        return false;
      }

    }else{
      return true;
    }
  }
}
