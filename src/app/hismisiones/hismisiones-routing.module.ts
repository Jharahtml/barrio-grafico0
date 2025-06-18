import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HismisionesPage } from './hismisiones.page';

const routes: Routes = [
  {
    path: '',
    component: HismisionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HismisionesPageRoutingModule {}
