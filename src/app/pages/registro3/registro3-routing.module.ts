import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registro3Page } from './registro3.page';

const routes: Routes = [
  {
    path: '',
    component: Registro3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registro3PageRoutingModule {}
