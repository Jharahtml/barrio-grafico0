import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Amigos1Page } from './amigos1.page';

const routes: Routes = [
  {
    path: '',
    component: Amigos1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Amigos1PageRoutingModule {}
