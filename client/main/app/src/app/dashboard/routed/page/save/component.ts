import {Component, AfterViewInit, HostListener} from '@angular/core';
import {Router} from "@angular/router";

import {StorageData} from "@CommonServiceStorageModule/storage.data";
import {AuthGuard} from "@CommonServiceAuthModule/auth.guard";

@Component({
  selector: 'page-main-login',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class PageDashboardSaveComponent implements AfterViewInit{

  eventListenerCount = 0;

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

  private getData(tokenValue, idUser) {
    var script1     = <HTMLScriptElement>document.createElement('SCRIPT');
    var script2     = <HTMLScriptElement>document.createElement('SCRIPT');

    script1.src = "https://api.vk.com/method/users.get?user_ids="+idUser+"&fields=bdate,sex,photo_200&access_token="+tokenValue+"&v=5.103&callback=callbackFuncSelf";
    script2.src = "https://api.vk.com/method/friends.get?user_ids="+idUser+"&fields=bdate,sex,photo_200&order=random&count=5&access_token="+tokenValue+"&v=5.103&callback=callbackFuncFriend";

    document.getElementsByTagName("head")[0].appendChild(script1);
    document.getElementsByTagName("head")[0].appendChild(script2);
  }

  private redirect() {
    const urlLastVisited = JSON.parse(window.localStorage.router).url.lastVisited;

    this.eventListenerCount = 0;

    if (this.authGuard.access) {
      this.router.navigateByUrl(urlLastVisited);
    } else {
      this.router.navigateByUrl('login');
    }
  }

  private checkEventListenerCount() {
    this.eventListenerCount += 1;

    if(this.eventListenerCount === 2) {
      this.redirect();
    }
  }

  ngAfterViewInit(): void {
    const id           = this.getParameterByName('user_id', window.location.href);
    const token        = this.getHash(window.location.hash);

    if (token) {
      this.authGuard.access = true;

      this.authGuard.vk.id    = id;
      this.authGuard.vk.token = token;

      window.localStorage.auth = JSON.stringify({logout: false});

      this.getData(token, id);
    }
  }

  @HostListener('window:dataSelf', ['$event'])
  dataSelfListener(event) {
    this.storageData.vk.data.self = event.detail;
    this.checkEventListenerCount();
  }

  @HostListener('window:dataFriends', ['$event'])
  dataFriendsListener(event) {
    this.storageData.vk.data.friends = event.detail;
    this.checkEventListenerCount();
  }
}
