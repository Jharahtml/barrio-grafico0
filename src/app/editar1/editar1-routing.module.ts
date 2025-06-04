import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editar1Page } from './editar1.page';

const routes: Routes = [
  {
    path: '',
    component: Editar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editar1PageRoutingModule {}
