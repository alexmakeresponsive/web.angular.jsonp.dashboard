import { Component, OnInit, HostListener } from '@angular/core';

import {AuthGuard} from "@CommonServiceAuthModule/auth.guard";
import {StorageData} from "@CommonServiceStorageModule/storage.data";

@Component({
  selector: 'page-main-home',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class PageDashboardHomeComponent implements OnInit{
  constructor(
    private authGuard:AuthGuard,
    private storageData:StorageData,
  ) {
  }

  private getData(tokenValue, idUser) {
    var script1     = <HTMLScriptElement>document.createElement('SCRIPT');
    var script2     = <HTMLScriptElement>document.createElement('SCRIPT');

    script1.src = "https://api.vk.com/method/users.get?user_ids="+idUser+"&fields=bdate,sex,photo_200&access_token="+tokenValue+"&v=5.103&callback=callbackFuncSelf";
    script2.src = "https://api.vk.com/method/friends.get?user_ids="+idUser+"&fields=bdate,sex,photo_200&order=random&count=5&access_token="+tokenValue+"&v=5.103&callback=callbackFuncFriend";

    document.getElementsByTagName("head")[0].appendChild(script1);
    document.getElementsByTagName("head")[0].appendChild(script2);
  }


  ngOnInit(): void {

    const token = this.authGuard.vk.token;
    const id = this.authGuard.vk.id;

    if (token) {
      this.getData(token, id);
    }
  }


  @HostListener('window:dataSelf', ['$event'])
  dataSelfListener(event) {
    console.log(event);
    this.storageData.vk.data.self = event.detail
  }

  @HostListener('window:dataFriends', ['$event'])
  dataFriendsListener(event) {
    console.log(event);
    this.storageData.vk.data.friends = event.detail
  }
}
