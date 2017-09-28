import 'rxjs/add/operator/switchMap';

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Backpack } from '../models/backpack';
import { BackpackService } from '../services/backpack.service';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.scss']
})
export class BackpackComponent implements OnInit {
  @Input() backpack: Backpack;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private backpackService: BackpackService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.backpackService.getBackpack(+params.get('id')))
      .subscribe(backpack => this.backpack = backpack);
  }

  goBack(): void {
    this.location.back();
  }
}
