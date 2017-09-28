import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SightService } from '../services/sight.service';
import { MapService } from '../services/map.service';
import { GeocoderService } from '../services/geocoder.service';
import { SightFilterService } from '../services/sight-filter.service';
import { FindComponent } from './find.component';
import { FiltersComponent } from './filters/filters.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    FindComponent,
    FiltersComponent,
    MapComponent,
    SearchComponent,
    InstructionsComponent,
  ],
  providers: [
    SightService,
    MapService,
    GeocoderService,
    SightFilterService,
  ]
})
export class FindModule {}
