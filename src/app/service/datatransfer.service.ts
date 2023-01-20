import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  listarray =[{"name":"Ravis","mark":"250"}];
  constructor() { }

  GetData(){
    return this.listarray;
  }

  SaveData(input:any){
    this.listarray.push(input);
  }
}
