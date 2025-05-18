import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registro4Page } from './registro4.page';

const routes: Routes = [
  {
    path: '',
    component: Registro4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registro4PageRoutingModule {}
