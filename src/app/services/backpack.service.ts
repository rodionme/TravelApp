import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Backpack } from '../backpack';

@Injectable()
export class BackpackService {
  private backpacksUrl = 'api/backpacks';

  constructor(private http: Http) {}

  getBackpacks(term?: string): Promise<Backpack[]> {
    let backpacksUrl = term ? `${this.backpacksUrl}/?title=${term}` : this.backpacksUrl;

    return this.http
      .get(backpacksUrl)
      .toPromise()
      .then(response => response.json().data as Backpack[])
      .catch(this.handleError);
  }

  getBackpack(id: number): Promise<Backpack> {
    const url = `${this.backpacksUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as Backpack)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);

    return Promise.reject(error.message || error);
  }
}