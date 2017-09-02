import { Component, OnInit } from '@angular/core';

import { Globals } from '../globals';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {
  private APP_TITLE = Globals.APP_TITLE;

  constructor() {}

  ngOnInit() {}
}
