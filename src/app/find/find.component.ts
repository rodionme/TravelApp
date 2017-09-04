import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SightService } from '../sight.service';
import { Sight } from '../sight';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  @Input() searchQuery: string = '';
  sights: Sight[];

  // TODO: Debug
  isInstructionsOn: boolean = false;
  //isInstructionsOn: boolean = true;

  isFiltersOn: boolean = false;
  isSearchOn: boolean = false;
  isSearchResultsOn: boolean = false;

  constructor(
    private location: Location,
    private locationService: SightService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getSights();
  }

  goBack(): void {
    this.location.back();
  }

  closeInstructions(): void {
    // TODO: Save the state to permanent storage to avoid annoying
    this.isInstructionsOn = false;
  }

  closeFilters(): void {
    this.isFiltersOn = false;
  }

  toggleFilters(): void {
    this.isFiltersOn = !this.isFiltersOn;
    this.closeSearch();

    if (this.isFiltersOn) {
      // TODO: Service.getFilters()
    }
  }

  closeSearch(): void {
    this.isSearchOn = false;
    this.isSearchResultsOn = false;
    this.searchQuery = '';
  }

  toggleSearch(): void {
    this.isSearchOn = !this.isSearchOn;
    this.closeFilters();
  }

  checkSearchInput(): void {
    if (this.searchQuery.length > 1) {
      // TODO: Service.getSights(this.searchQuery)
      this.isSearchResultsOn = true;
    } else {
      this.isSearchResultsOn = false;
    }
  }


  cancelFilters(): void {
    this.closeFilters();
  }

  saveFilters(): void {
    // TODO: Service.setFilters()
    this.closeFilters();
  }


  getSights(): void {
    this.locationService.getSights().then(sights => this.sights = sights);
  }

  goToDetail(sight): void {
    this.router.navigate(['/sight', sight.id]);
  }
}