import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiseventosPage } from './hiseventos.page';

const routes: Routes = [
  {
    path: '',
    component: HiseventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiseventosPageRoutingModule {}
