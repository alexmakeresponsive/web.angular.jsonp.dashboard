import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'part-nav-main',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class PartNavMainComponent {
  constructor(
    private router:Router
    ) {
  }

  logout() {
    window.localStorage.auth = JSON.stringify({logout: true});
    this.router.navigateByUrl('login');
  }
}
