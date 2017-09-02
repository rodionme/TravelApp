import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchComponent } from './launch/launch.component';
import { FindComponent } from './find/find.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
