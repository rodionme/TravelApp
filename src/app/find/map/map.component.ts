import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';

import { MapService } from '../../services/map.service';
import { SightService } from '../../services/sight.service';
import { SightType } from '../../sight-type.enum';
import { GeocoderService } from '../../services/geocoder.service';
import { SightFilterService } from '../../services/sight-filter.service';
import { EVENT_NAME, EventService } from '../../services/event.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @HostBinding('class') cssClasses = 'map-wrapper';

  clusterLayer: L.MarkerClusterGroup;
  markers: {[name: string]: L.Marker[]} = {};

  oldFilters: SightType[] = [];
  activeFilters: SightType[];

  constructor(
    private sightService: SightService,
    private mapService: MapService,
    private geocoder: GeocoderService,
    private sightFilterService: SightFilterService,
    private eventService: EventService,
  ) {}

  ngOnInit(): void {
    this.activeFilters = this.sightFilterService.getActiveFilters();

    this.eventService.events$.forEach(event => {
      if (event.name === EVENT_NAME.filtersSaved) {
        this.updateMarkers();
      }
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  initMap(): void {
    let map = L.map('map', {
      zoomControl: false,
      center: L.latLng(48.463, 35.039),     // Dnipro
      zoom: 12,
      minZoom: 4,
      maxZoom: 19,
      layers: [this.mapService.baseMaps.OpenStreetMap]
    });

    L.control.zoom({ position: 'topleft' }).addTo(map);
    L.control.layers(this.mapService.baseMaps).addTo(map);
    L.control.scale().addTo(map);

    this.clusterLayer = L.markerClusterGroup().addTo(map);
    this.mapService.map = map;

    // TODO: InMemoryWebApiModule triggers the malfunctioning of this method
    //this.geocoder.getCurrentLocation()
    //  .subscribe(
    //    location => map.panTo([location.latitude, location.longitude]),
    //    err => console.error(err)
    //  );

    this.initMarkerGroups();
  }

  initMarkerGroups(): void {
    this.sightService.getSights().subscribe(sights => {
      sights.forEach(sight => {
        let iconUrl = `../assets/img/icons/markers/marker-icon-${sight.type}.png`;

        if (!(sight.type in this.markers)) {
          this.markers[sight.type] = [];
        }

        // TODO: Implement link to sight into marker popup or on marker click
        this.markers[sight.type].push(L.marker(sight.coordinates, {
          icon: L.icon({
            iconSize: [25, 41],
            iconAnchor: [13, 18],
            iconUrl: iconUrl,
            shadowUrl: '../assets/img/icons/markers/marker-shadow.png'
          })
        })
          .bindPopup(sight.title));
      });

      this.updateMarkers();
    });
  }

  updateMarkers(): void {
    this.activeFilters = this.sightFilterService.getActiveFilters();

    let markersToAdd = this.activeFilters.filter(activeFilter => {
      return !this.oldFilters.some(function(oldFilter) {
        return oldFilter === activeFilter;
      });
    });

    let markersToRemove = this.oldFilters.filter(oldFilter => {
      return !this.activeFilters.some(function(activeFilter) {
        return oldFilter === activeFilter;
      });
    });

    this.addMarkers(markersToAdd);
    this.removeMarkers(markersToRemove);

    this.oldFilters = this.activeFilters;
  }

  addMarkers(sightTypes: SightType[]): void {
    sightTypes.forEach(sightType => {
      this.clusterLayer.addLayers(this.markers[sightType]);
    });
  }

  removeMarkers(sightTypes: SightType[]): void {
    sightTypes.forEach(sightType => {
      this.clusterLayer.removeLayers(this.markers[sightType]);
    });
  }
}
