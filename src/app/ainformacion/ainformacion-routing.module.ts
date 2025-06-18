import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AinformacionPage } from './ainformacion.page';

const routes: Routes = [
  {
    path: '',
    component: AinformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AinformacionPageRoutingModule {}
