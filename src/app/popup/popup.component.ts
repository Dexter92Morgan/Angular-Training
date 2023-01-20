import { Component, OnInit } from '@angular/core';
import { MasterService } from '../service/master.service';

declare var window: any;

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  closeResult: string = '';
  formModal: any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  openModal() {
    this.formModal.show();
  }

  dosomething() {
    this.formModal.hide();
  }

  constructor (private service: MasterService){

  }
  savedata(name: string) {
    this.service.SaveData(name);
  }
}
