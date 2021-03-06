import { NgModule }                             from '@angular/core';
import { CommonModule }                         from '@angular/common';

import {NgbModule}                              from '@ng-bootstrap/ng-bootstrap';

import {DashboardDomainModule}                  from "@DashboardModule/domain/dashboard-domain.module";

import {AppRoutingModule}                       from "@AppModule/app-routing.module";

import {PageDashboardProfileComponent}            from "./page/profile/component";
import {PageDashboardErrorComponent}            from "./page/error/component";
import {PageDashboardHomeComponent}             from "./page/home/component";
import {PageDashboardLoginComponent}            from "./page/login/component";
import {PageDashboardSaveComponent}            from "./page/save/component";

import {PartHeaderComponent}                    from "./part/header/component";
import {PartNavHomeComponent}                   from "./part/nav/home/component";
import {PartNavMainComponent}                   from "./part/nav/main/component";


@NgModule({
  declarations: [
    PageDashboardProfileComponent,
    PageDashboardErrorComponent,
    PageDashboardHomeComponent,
    PageDashboardLoginComponent,
    PageDashboardSaveComponent,

    PartHeaderComponent,
    PartNavHomeComponent,
    PartNavMainComponent
  ],
  imports: [
    NgbModule,

    DashboardDomainModule,

    AppRoutingModule,
  ]
})
export class DashboardRoutedModule { }
