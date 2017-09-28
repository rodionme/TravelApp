import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SightService } from '../../services/sight.service';
import { Sight } from '../../models/sight';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @HostBinding('class') cssClasses = 'search-wrapper overlay-panel overlay-panel--expanded';
  @Input() searchQuery: string = '';

  isSearchResultsOn: boolean = false;
  sights: Sight[];

  constructor(
    private sightService: SightService,
    private router: Router,
  ) {}

  onSearchInput(): void {
    if (this.searchQuery.length > 1) {
      this.sightService.getSights(this.searchQuery).subscribe(sights => {
        this.sights = sights;
        this.isSearchResultsOn = true;
      });
    } else {
      this.isSearchResultsOn = false;
    }
  }

  goToDetail(sight): void {
    this.router.navigate(['/sight', sight.id]);
  }
}
