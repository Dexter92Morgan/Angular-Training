import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MasterService } from '../service/master.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private service: MasterService, private router: Router){

   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.service.IsLoggedIn()){
          return true;
      }
      else{
          this.router.navigate(["loginroute"])
        return false;
      }
  }
  
}
