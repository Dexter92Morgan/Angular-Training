import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  // using array
  userinf0 = [
    { Name: 'Ramesh', Mark: 200 },
    { Name: 'Preetham', Mark: 300 },
    { Name: 'Harsh', Mark: 100 }
  ];

  GetUserData() {
    return this.userinf0;
  }

  // using api
  constructor(private http: HttpClient) {}
    apiurl = 'http://localhost:24012/api/Employee';
  emplist: any;
  GetApiData() {
    return this.http.get(this.apiurl);
  }

  //save data
  userobject = { Name: 'Ramesh', Mark: 0 };
  SaveData(name: string) {
    this.userobject = { Name: name, Mark: 100 };
    this.userinf0.push(this.userobject);
    console.log(this.userinf0);
  }

  //gaurd routing
  IsLoggedIn() {
    return localStorage.getItem('username') != null;
  }

  HaveRoleAccess(routername: any) {
    const role = localStorage.getItem('role');
    if (role == 'admin') {
      return true;
    } else {
      if (routername == '/About') {
        return true;
      } else {
        return false;
      }
    }
  }
}
