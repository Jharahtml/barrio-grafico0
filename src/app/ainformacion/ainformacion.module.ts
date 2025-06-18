import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AinformacionPageRoutingModule } from './ainformacion-routing.module';

import { AinformacionPage } from './ainformacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AinformacionPageRoutingModule
  ],
  declarations: [AinformacionPage]
})
export class AinformacionPageModule {}
