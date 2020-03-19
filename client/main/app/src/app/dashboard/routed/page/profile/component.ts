import { Component, OnInit ,AfterViewInit } from '@angular/core';

import {StorageData} from "@CommonServiceStorageModule/storage.data";

@Component({
  selector: 'page-main-home',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class PageDashboardProfileComponent implements OnInit{

  data: {
    self:any,
    friends:any
  } = {
    self: null,
    friends: null
  };

  constructor(
    private storageData:StorageData,
  ) {
  }

  ngOnInit(): void {
    this.data.self    = this.storageData.vk.data.self;
    this.data.friends = this.storageData.vk.data.friends;
  }
}
