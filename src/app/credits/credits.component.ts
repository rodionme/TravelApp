import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Globals } from '../globals';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  APP_TITLE = Globals.APP_TITLE;

  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
