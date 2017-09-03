import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-backpacks',
  templateUrl: './backpacks.component.html',
  styleUrls: ['./backpacks.component.scss']
})
export class BackpacksComponent implements OnInit {
  constructor(private location: Location) { }

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
