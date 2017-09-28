import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { FindModule } from './find/find.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { CreditsComponent } from './credits/credits.component';
import { FaqComponent } from './faq/faq.component';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { BackpackComponent } from './backpack/backpack.component';
import { SightComponent } from './sight/sight.component';
import { SettingsComponent } from './settings/settings.component';
import { BackpackService } from './services/backpack.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    FindModule,
  ],
  declarations: [
    AppComponent,
    LaunchComponent,
    CreditsComponent,
    FaqComponent,
    BackpacksComponent,
    BackpackComponent,
    SightComponent,
    SettingsComponent,
  ],
  providers: [
    BackpackService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
