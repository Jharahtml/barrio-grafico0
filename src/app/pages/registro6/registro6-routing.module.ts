import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registro6Page } from './registro6.page';

const routes: Routes = [
  {
    path: '',
    component: Registro6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registro6PageRoutingModule {}
