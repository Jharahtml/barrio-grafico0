import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Coleccion1Page } from './coleccion1.page';

const routes: Routes = [
  {
    path: '',
    component: Coleccion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Coleccion1PageRoutingModule {}
