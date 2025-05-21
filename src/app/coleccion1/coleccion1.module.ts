import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Coleccion1PageRoutingModule } from './coleccion1-routing.module';

import { Coleccion1Page } from './coleccion1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Coleccion1PageRoutingModule
  ],
  declarations: [Coleccion1Page]
})
export class Coleccion1PageModule {}
