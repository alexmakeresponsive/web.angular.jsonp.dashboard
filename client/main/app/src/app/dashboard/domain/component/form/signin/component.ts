import { Component, OnInit } from '@angular/core';

import {environment} from "@AppModule/../environments/environment";

@Component({
  selector: 'form-sign-in',
  templateUrl: './component.html',
  styleUrls: ['./component.styl']
})
export class FormSignInComponent implements OnInit{

  domain:string;
  client_id:number;

  constructor(

    ) {
  }

  ngOnInit() {
    this.client_id = environment.service.vk.auth.client_id;
    this.domain = environment.domain;
  }
}
