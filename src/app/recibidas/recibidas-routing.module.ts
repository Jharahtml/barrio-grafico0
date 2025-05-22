import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecibidasPage } from './recibidas.page';

const routes: Routes = [
  {
    path: '',
    component: RecibidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecibidasPageRoutingModule {}
