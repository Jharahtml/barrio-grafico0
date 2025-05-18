import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registro5Page } from './registro5.page';

const routes: Routes = [
  {
    path: '',
    component: Registro5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registro5PageRoutingModule {}
