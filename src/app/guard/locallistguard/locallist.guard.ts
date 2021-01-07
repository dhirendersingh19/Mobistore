import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckserviceService } from 'src/app/services/status/checkservice.service';

@Injectable({
  providedIn: 'root'
})
export class LocallistGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  isAdmin:boolean;
  isLoggedIn:boolean;

  constructor(private checkservice:CheckserviceService, private router:Router) {

    this.checkservice.getAdminStatus().subscribe(status => {
      this.isAdmin = status;
    })
    this.checkservice.getLoggedInStatus().subscribe(status => {
      this.isLoggedIn = status;
    })

   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isLoggedIn){
        if(this.isAdmin){
          return true;
        }else{
          console.log('Users cant view inventory');
          this.router.navigateByUrl('products');
          return false;
        }
      }else{
        alert('Admin account required');
        this.router.navigateByUrl('login');
        return false;
      }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
