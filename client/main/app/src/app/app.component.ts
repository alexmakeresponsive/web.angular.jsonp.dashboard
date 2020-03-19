import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {Router, NavigationStart} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {


  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
        let url = event.url;

        const posAnchor = url.lastIndexOf('#');

        if (posAnchor > 0) {
          url = url.substring(0, posAnchor);
        }

        if (url === '/login' || url === '/save') {
          return;
        }

        const router = {url: {lastVisited: ''}};
              router.url.lastVisited = url;

        window.localStorage.router = JSON.stringify(router);
      }
    });
  }
}
