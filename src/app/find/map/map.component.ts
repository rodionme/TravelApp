import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';

import { MapService } from '../../services/map.service';
import { SightService } from '../../services/sight.service';
import { SightType } from '../../sight-type.enum';
import { Sight } from '../../models/sight';
import { GeocoderService } from '../../services/geocoder.service';
import { SightFilterService } from '../../services/sight-filter.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @HostBinding('class') cssClasses = 'map-wrapper';

  sights: Sight[];
  activeFilters: SightType[];

  constructor(
    private sightService: SightService,
    private mapService: MapService,
    private geocoder: GeocoderService,
    private sightFilterService: SightFilterService,
  ) {}

  ngOnInit() {
    this.activeFilters = this.sightFilterService.getActiveFilters();

    // TODO: InMemoryWebApiModule triggers the malfunctioning of this method
    //this.geocoder.getCurrentLocation()
    //  .subscribe(
    //    location => map.panTo([location.latitude, location.longitude]),
    //    err => console.error(err)
    //  );
  }

  ngAfterViewInit() {
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
  }
}
