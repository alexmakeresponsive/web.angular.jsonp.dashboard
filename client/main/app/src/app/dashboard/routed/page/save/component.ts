import { Component, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";

import {StorageData} from "@CommonServiceStorageModule/storage.data";
import {AuthGuard} from "@CommonServiceAuthModule/auth.guard";

@Component({
  selector: 'page-main-login',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class PageDashboardSaveComponent implements AfterViewInit{

  constructor(
    private storageData:StorageData,
    private authGuard:AuthGuard,
    private router:Router

  ) {
  }

  private getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  private getHash(hash) {
    let l1 = hash.substr(0, hash.indexOf('&'));
    let l2 = l1.substr(l1.indexOf('=')+1);

    return l2;
  }

  ngAfterViewInit(): void {
    const id           = this.getParameterByName('user_id', window.location.href);
    const token        = this.getHash(window.location.hash);

    const urlLastVisited = JSON.parse(window.localStorage.router).url.lastVisited;


    if (token) {
      this.authGuard.access = true;

      this.authGuard.vk.id    = id;
      this.authGuard.vk.token = token;

      window.localStorage.auth = JSON.stringify({logout: false});
    }

    if (this.authGuard.access) {
      this.router.navigateByUrl(urlLastVisited);
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
