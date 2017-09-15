import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Sight } from '../sight';

@Injectable()
export class SightService {
  private sightsUrl = 'api/sights';

  constructor(private http: Http) {}

  getSights(term?: string): Observable<Sight[]> {
    let sightsUrl = term ? `${this.sightsUrl}/?title=${term}` : this.sightsUrl;

    return this.http
      .get(sightsUrl)
      .map(response => response.json().data as Sight[])
      .catch(this.handleError);
  }

  getSight(id: number): Observable<Sight> {
    const url = `${this.sightsUrl}/${id}`;

    return this.http
      .get(url)
      .map(response => response.json().data as Sight)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);

    return Promise.reject(error.message || error);
  }
}