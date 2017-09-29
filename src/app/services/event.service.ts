import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


export const enum EVENT_NAME {
  filtersOpened = 'filtersOpened',
  filtersSaved = 'filterSaved',
  filtersClosed = 'filtersClosed',
}

@Injectable()
export class EventService {
  private _subject = new Subject<any>();

  event(event) {
    this._subject.next(event);
  }

  get events$() {
    return this._subject.asObservable();
  }
}