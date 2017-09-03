import { Component, OnInit } from '@angular/core';

import { Globals } from '../globals';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {
  APP_TITLE = Globals.APP_TITLE;

  constructor() {}

  ngOnInit() {}
}