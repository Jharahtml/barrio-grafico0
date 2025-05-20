import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmigoperfilPage } from './amigoperfil.page';

const routes: Routes = [
  {
    path: '',
    component: AmigoperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmigoperfilPageRoutingModule {}
