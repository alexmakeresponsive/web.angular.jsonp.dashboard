import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventService {

  subject: Subject<boolean> = new Subject();

  constructor() {
  }

  action() {
    this.subject.next(true);
  }
}
