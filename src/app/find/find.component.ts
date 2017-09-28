import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import * as L from 'leaflet';
import 'leaflet.markercluster';

import { MapService } from '../services/map.service';
import { SightService } from '../services/sight.service';
import { SightType } from '../sight-type.enum';
import { Sight } from '../models/sight';
import { SightFilter } from '../models/sight-filter';
import { GeocoderService } from '../services/geocoder.service';
import { SightFilterService } from '../services/sight-filter.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
  @Input() searchQuery: string = '';
  sights: Sight[];

  filters: SightFilter[];
  activeFilters: SightType[];

  // TODO: Debug
  isInstructionsOn: boolean = false;
  //isInstructionsOn: boolean = true;

  isFiltersOn: boolean = false;
  isSearchOn: boolean = false;
  isSearchResultsOn: boolean = false;

  constructor(
    private location: Location,
    private sightService: SightService,
    private router: Router,
    private mapService: MapService,
    private geocoder: GeocoderService,
    private sightFilterService: SightFilterService,
  ) {}

  ngOnInit() {
    this.filters = this.sightFilterService.getFilters();
    this.activeFilters = this.sightFilterService.getActiveFilters();

    let map = L.map('map', {
      zoomControl: false,
      center: L.latLng(48.463, 35.039),     // Dnipro
      zoom: 12,
      minZoom: 4,
      maxZoom: 19,
      layers: [this.mapService.baseMaps.OpenStreetMap]
    });
    let markers = L.markerClusterGroup();

    L.control.zoom({ position: 'topright' }).addTo(map);
    L.control.layers(this.mapService.baseMaps).addTo(map);
    L.control.scale().addTo(map);

    this.mapService.map = map;

    this.sightService.getSights().subscribe(sights => {
      // TODO: Move filtering to backend
      let filteredSights = sights.filter(sight => this.activeFilters.includes(sight.type));

      // TODO: Debug
      console.log(this.activeFilters);
      console.log(filteredSights);

      filteredSights.forEach(sight => {
        let iconUrl = `../assets/img/icons/markers/marker-icon-${sight.type}.png`;

        // TODO: Implement link to sight into marker popup or on marker click
        markers.addLayer(L.marker(sight.coordinates, {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 18],
            iconUrl: iconUrl,
            shadowUrl: '../assets/img/icons/markers/marker-shadow.png'
          })
        })
          .addTo(map)
          .bindPopup(sight.title)
          .openPopup());
      });

      map.addLayer(markers);
    });

    // TODO: InMemoryWebApiModule triggers the malfunctioning of this method
    //this.geocoder.getCurrentLocation()
    //  .subscribe(
    //    location => map.panTo([location.latitude, location.longitude]),
    //    err => console.error(err)
    //  );
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
      this.filters = this.sightFilterService.getFilters();
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

  onSearchInput(term: string): void {
    if (this.searchQuery.length > 1) {
      this.isSearchResultsOn = true;
      this.getSights(term);
    } else {
      this.isSearchResultsOn = false;
    }
  }


  cancelFilters(): void {
    this.closeFilters();
  }

  saveFilters(form: NgForm): void {
    this.filters.map(filter => {
      filter.isActive = form.value[filter['id']];
    });

    this.sightFilterService.setFilters(this.filters);
    this.closeFilters();
  }


  getSights(term?: string): void {
    this.sightService.getSights(term).subscribe(sights => this.sights = sights);
  }

  goToDetail(sight): void {
    this.router.navigate(['/sight', sight.id]);
  }
}