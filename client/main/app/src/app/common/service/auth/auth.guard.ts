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

    if (this.access) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
