import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcuentaPage } from './acuenta.page';

const routes: Routes = [
  {
    path: '',
    component: AcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcuentaPageRoutingModule {}
