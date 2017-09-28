import { Injectable } from '@angular/core';

import { SightFilter } from '../models/sight-filter';
import { SightType } from '../sight-type.enum';


const FILTER_STORAGE = 'TA-filters';
const INITIAL_FILTERS = [
  //{ id: 'own-backpacks', title: 'My Backpacks', isActive: true },
  { id: SightType.archaeological, title: 'Archaeological Sites', isActive: true },
  { id: SightType.attractions, title: 'Cultural Attractions', isActive: true },
  { id: SightType.buildings, title: 'Historic Buildings', isActive: true },
  { id: SightType.cemeteries, title: 'Historic Cemeteries', isActive: true },
  { id: SightType.communities, title: 'Historic Communities', isActive: true },
  { id: SightType.markers, title: 'Historic Sites', isActive: true },
  { id: SightType.museums, title: 'Historic Markers', isActive: true },
  { id: SightType.parks, title: 'Museums', isActive: true },
  { id: SightType.natural, title: 'National Parks', isActive: true },
  { id: SightType.sites, title: 'Natural History Sites', isActive: true },
];


@Injectable()
export class SightFilterService {
  constructor() {}

  getFilters(): SightFilter[] {
    return JSON.parse(localStorage.getItem(FILTER_STORAGE)) || INITIAL_FILTERS;
  }

  getActiveFilters(): SightType[] {
    let activeFilters = [];

    this.getFilters().filter(filter => filter.isActive).map(filter => {activeFilters.push(filter['id'])});

    return activeFilters;
  }

  setFilters(filters: SightFilter[]): void {
    localStorage.setItem(FILTER_STORAGE, JSON.stringify(filters));
  }
}
