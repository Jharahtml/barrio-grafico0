import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecibidasPageRoutingModule } from './recibidas-routing.module';

import { RecibidasPage } from './recibidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecibidasPageRoutingModule
  ],
  declarations: [RecibidasPage]
})
export class RecibidasPageModule {}
