import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageData {

  vk = {
    data: {
      self: null,
      friends: null
    }
  }
}
