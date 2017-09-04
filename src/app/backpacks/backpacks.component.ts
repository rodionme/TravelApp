import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Backpack } from '../backpack';
import { BackpackService } from '../backpack.service';

@Component({
  selector: 'app-backpacks',
  templateUrl: './backpacks.component.html',
  styleUrls: ['./backpacks.component.scss']
})
export class BackpacksComponent implements OnInit {
  backpacks: Backpack[];

  constructor(
    private location: Location,
    private backpackService: BackpackService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getBackpacks();
  }

  goBack(): void {
    this.location.back();
  }

  getBackpacks(): void {
    this.backpackService.getBackpacks().then(backpacks => this.backpacks = backpacks);
  }

  goToDetail(backpack): void {
    this.router.navigate(['/backpack', backpack.id]);
  }
}
