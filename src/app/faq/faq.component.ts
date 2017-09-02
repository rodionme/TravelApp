import { Component, OnInit } from '@angular/core';

import { Globals } from './../globals';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  private APP_TITLE = Globals.APP_TITLE;

  constructor() {}

  ngOnInit() {}
}