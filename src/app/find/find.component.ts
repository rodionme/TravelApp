import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  @Input() searchQuery: string = '';

  // TODO: Debug
  isInstructionsOn: boolean = false;
  //isInstructionsOn: boolean = true;

  isFiltersOn: boolean = false;
  isSearchOn: boolean = false;
  isSearchResultsOn: boolean = false;

  constructor(private location: Location) {}

  ngOnInit() {}

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
      // TODO: Service.getLocations(this.searchQuery)
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
}