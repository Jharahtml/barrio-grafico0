import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcuentaPageRoutingModule } from './acuenta-routing.module';

import { AcuentaPage } from './acuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcuentaPageRoutingModule
  ],
  declarations: [AcuentaPage]
})
export class AcuentaPageModule {}
