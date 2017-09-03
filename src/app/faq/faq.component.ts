import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Globals } from './../globals';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  APP_TITLE = Globals.APP_TITLE;

  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}