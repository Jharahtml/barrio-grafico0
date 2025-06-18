import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HismisionesPageRoutingModule } from './hismisiones-routing.module';

import { HismisionesPage } from './hismisiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HismisionesPageRoutingModule
  ],
  declarations: [HismisionesPage]
})
export class HismisionesPageModule {}
