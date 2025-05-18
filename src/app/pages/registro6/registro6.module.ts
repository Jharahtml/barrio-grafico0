import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro6PageRoutingModule } from './registro6-routing.module';

import { Registro6Page } from './registro6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registro6PageRoutingModule
  ],
  declarations: [Registro6Page]
})
export class Registro6PageModule {}
