import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginroute',
  templateUrl: './loginroute.component.html',
  styleUrls: ['./loginroute.component.css']
})
export class LoginrouteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  proceedLogin(name: any, role:any) {
    localStorage.setItem('username', name);
    localStorage.setItem('role', role);
    this.router.navigate(['']);
  }
}
