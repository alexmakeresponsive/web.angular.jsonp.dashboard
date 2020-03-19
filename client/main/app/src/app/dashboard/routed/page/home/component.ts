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

  ngOnInit(): void {

  }
}
