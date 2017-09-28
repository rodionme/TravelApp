import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


const INSTRUCTIONS_STORAGE = 'TA-instructions';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  isInstructionsOn: boolean = true;
  isFiltersOn: boolean = false;
  isSearchOn: boolean = false;

  constructor(
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.initInstructions();
  }

  initInstructions(): void {
    if (localStorage.getItem(INSTRUCTIONS_STORAGE)) {
      this.isInstructionsOn = false;
    }
  }

  closeInstructions(): void {
    this.isInstructionsOn = false;
    localStorage.setItem(INSTRUCTIONS_STORAGE, 'closed');
  }

  closeFilters(): void {
    this.isFiltersOn = false;
  }

  toggleFilters(): void {
    this.isFiltersOn = !this.isFiltersOn;
    this.closeSearch();
  }

  closeSearch(): void {
    this.isSearchOn = false;
  }

  toggleSearch(): void {
    this.isSearchOn = !this.isSearchOn;
    this.closeFilters();
  }

  goBack(): void {
    this.location.back();
  }
}