import { BrowserModule }                        from '@angular/platform-browser';

import { NgModule }                             from '@angular/core';

import { AppRoutingModule }                     from './app-routing.module';



import {DashboardDomainModule}                  from "@DashboardModule/domain/dashboard-domain.module";
import {DashboardRoutedModule}                  from "@DashboardModule/routed/dashboard-routed.module";

import { AppComponent }                         from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    DashboardDomainModule,
    DashboardRoutedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
