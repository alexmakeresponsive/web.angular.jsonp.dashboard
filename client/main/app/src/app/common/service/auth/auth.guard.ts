import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  vk = {
    id:    '',
    token: ''
  };

  access = false;

  constructor(
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Promise<any> | boolean {

    const auth = JSON.parse(window.localStorage.auth);

    if (this.access) {
      return true;
    } else {

      if(!auth.logout) {
        window.location.href = "https://oauth.vk.com/authorize?client_id=7227371&display=page&redirect_uri=http://domboot.amrxt.local/save&scope=friends&response_type=token&v=5.103&state=123456";
      } else {
        this.router.navigateByUrl('login');
      }

      return false;
    }
  }
}
