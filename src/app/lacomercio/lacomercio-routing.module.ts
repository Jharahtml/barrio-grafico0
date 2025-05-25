import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LacomercioPage } from './lacomercio.page';

const routes: Routes = [
  {
    path: '',
    component: LacomercioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LacomercioPageRoutingModule {}
