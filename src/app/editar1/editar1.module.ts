import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editar1PageRoutingModule } from './editar1-routing.module';

import { Editar1Page } from './editar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editar1PageRoutingModule
  ],
  declarations: [Editar1Page]
})
export class Editar1PageModule {}
