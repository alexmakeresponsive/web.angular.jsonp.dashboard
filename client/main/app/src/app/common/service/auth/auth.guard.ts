import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Injectable } from '@angular/core';

import {environment} from "@AppModule/../environments/environment";

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

    let auth = {logout:true};

    if (window.localStorage.hasOwnProperty('auth')) {
       auth = JSON.parse(window.localStorage.auth);
    }

    const domain = environment.domain;
    const client_id = environment.service.vk.auth.client_id;

    if (this.access) {
      return true;
    } else {

      if(!auth.logout) {
        window.location.href = `https://oauth.vk.com/authorize?client_id=${client_id}&display=page&redirect_uri=http://${domain}/save&scope=friends&response_type=token&v=5.103&state=123456`;
      } else {
        this.router.navigateByUrl('login');
      }

      return false;
    }
  }
}
