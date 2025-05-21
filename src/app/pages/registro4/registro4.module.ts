import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro4PageRoutingModule } from './registro4-routing.module';

import { Registro4Page } from './registro4.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    Registro4PageRoutingModule
  ],
  declarations: [Registro4Page]
})
export class Registro4PageModule {}
