import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Auth :AuthenticationService, private router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.Auth.IsLoggedIn){
        return this.router.createUrlTree(['/newlogin']);
      }else {
        return true
      }
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const loginService = inject(AuthenticationService);
  const router = inject(Router);
  if (!loginService.IsLoggedIn){
    toastr.error("Make sure you are logged in !")
    return router.createUrlTree(['/login']);
  }else {
    return true
  }
};


