import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { FindComponent } from './find/find.component';
import { CreditsComponent } from './credits/credits.component';
import { FaqComponent } from './faq/faq.component';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { BackpackComponent } from './backpack/backpack.component';
import { LocationComponent } from './location/location.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    FindComponent,
    CreditsComponent,
    FaqComponent,
    BackpacksComponent,
    BackpackComponent,
    LocationComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
