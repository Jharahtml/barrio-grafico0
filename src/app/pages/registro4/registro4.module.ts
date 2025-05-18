import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro4PageRoutingModule } from './registro4-routing.module';

import { Registro4Page } from './registro4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registro4PageRoutingModule
  ],
  declarations: [Registro4Page]
})
export class Registro4PageModule {}
