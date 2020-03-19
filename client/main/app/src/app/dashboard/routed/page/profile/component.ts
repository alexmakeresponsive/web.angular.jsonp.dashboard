import { Component, OnInit ,AfterViewInit } from '@angular/core';

import {StorageData} from "@CommonServiceStorageModule/storage.data";

@Component({
  selector: 'page-main-home',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class PageDashboardProfileComponent implements OnInit{
  constructor(
    private storageData:StorageData,
  ) {
  }

  ngOnInit(): void {
    console.log(this.storageData);
  }
}
