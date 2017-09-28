import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SightFilter } from '../../models/sight-filter';
import { SightFilterService } from '../../services/sight-filter.service';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @HostBinding('class') cssClasses = 'search-filters-wrapper overlay-panel overlay-panel--expanded';
  @Output() onFiltersClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  filters: SightFilter[];

  constructor(
    private sightFilterService: SightFilterService,
  ) {}

  ngOnInit() {
    this.filters = this.sightFilterService.getFilters();
  }

  saveFilters(form: NgForm): void {
    this.filters.map(filter => {
      filter.isActive = form.value[filter['id']];
    });

    this.sightFilterService.setFilters(this.filters);
    this.closeFilters();
  }

  closeFilters(): void {
    this.onFiltersClose.emit(false);
  }
}
