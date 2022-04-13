import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(route);
  }

   isAuthorized(route: ActivatedRouteSnapshot):boolean{

    const roles = localStorage.getItem('user_role');
    const expectedRoles = route.data.expectedRoles;

    if (expectedRoles.indexOf(roles) !== -1){
        console.log(expectedRoles)
        return true
    }else{
        window.alert('You don\'t have access to the resource');
        return false;
    }

  }
  
}
