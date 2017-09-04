import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
import { BackpackService } from './backpack.service';
import { SightService } from './sight.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    FindComponent,
    CreditsComponent,
    FaqComponent,
    BackpacksComponent,
    BackpackComponent,
    SightComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    BackpackService,
    SightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
