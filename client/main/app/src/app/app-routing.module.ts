import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {AuthGuard}                                        from "@CommonServiceAuthModule/auth.guard";

import {PageDashboardHomeComponent}                       from "@DashboardModule/routed/page/home/component";
import {PageDashboardProfileComponent}                    from "@DashboardModule/routed/page/profile/component";
import {PageDashboardLoginComponent}                      from "@DashboardModule/routed/page/login/component";
import {PageDashboardErrorComponent}                      from "@DashboardModule/routed/page/error/component";


const routes: Routes = [
  { path: '',                                         component: PageDashboardHomeComponent, canActivate: [AuthGuard] },
  { path: 'profile',                                  component: PageDashboardProfileComponent, canActivate: [AuthGuard] },

  { path: 'login',                                    component: PageDashboardLoginComponent},


  { path: '**',                                       component: PageDashboardErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
