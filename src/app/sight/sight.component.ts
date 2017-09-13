import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Sight } from '../sight';
import { SightService } from '../sight.service';

@Component({
  selector: 'app-location',
  templateUrl: 'sight.component.html',
  styleUrls: ['sight.component.scss']
})
export class SightComponent implements OnInit {
  sight: Sight;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private sightService: SightService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.sightService.getSight(+params.get('id')))
      .subscribe(sight => this.sight = sight);
  }

  goBack(): void {
    // TODO: Add the ability to return to Find screen with opened latest search results
    this.location.back();
  }

  get distance(): number {
    // TODO: Add real calculations of distance based on current user position and sight geolocation
    return 100;
  }
}