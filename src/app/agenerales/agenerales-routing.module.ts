import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgeneralesPage } from './agenerales.page';

const routes: Routes = [
  {
    path: '',
    component: AgeneralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeneralesPageRoutingModule {}
