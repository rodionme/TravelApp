import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchComponent } from './launch/launch.component';
import { FindComponent } from './find/find.component';
import { CreditsComponent } from './credits/credits.component';
import { FaqComponent } from './faq/faq.component';
import { BackpacksComponent } from './backpacks/backpacks.component';
import { BackpackComponent } from './backpack/backpack.component';
import { LocationComponent } from './location/location.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchComponent
  }, {
    path: 'launch',
    component: LaunchComponent
  }, {
    path: 'find',
    component: FindComponent
  }, {
    path: 'credits',
    component: CreditsComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }, {
    path: 'backpacks',
    component: BackpacksComponent
  }, {
    path: 'backpack',
    component: BackpackComponent
  }, {
    path: 'location',
    component: LocationComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
