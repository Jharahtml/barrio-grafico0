import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormaspagoPage } from './formaspago.page';

const routes: Routes = [
  {
    path: '',
    component: FormaspagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormaspagoPageRoutingModule {}
