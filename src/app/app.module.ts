import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { FindComponent } from './find/find.component';
import { CreditsComponent } from './credits/credits.component';
import { FaqComponent } from './faq/faq.component';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { BackpackComponent } from './backpack/backpack.component';
import { SightComponent } from './sight/sight.component';
import { SettingsComponent } from './settings/settings.component';
import { BackpackService } from './services/backpack.service';
import { SightService } from './services/sight.service';
import { MapService } from './services/map.service';
import { GeocoderService } from './services/geocoder.service';
import { SightFilterService } from './services/sight-filter.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    LaunchComponent,
    FindComponent,
    CreditsComponent,
    FaqComponent,
    BackpacksComponent,
    BackpackComponent,
    SightComponent,
    SettingsComponent,
  ],
  providers: [
    BackpackService,
    SightService,
    MapService,
    GeocoderService,
    SightFilterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
