import { Component, OnInit } from '@angular/core';

import {environment} from "@AppModule/../environments/environment";

@Component({
  selector: 'form-sign-in',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class FormSignInComponent implements OnInit{

  domain:string;

  constructor(

    ) {
  }

  ngOnInit() {
    this.domain = environment.domain;
  }
}
