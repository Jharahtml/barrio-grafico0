import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro2PageRoutingModule } from './registro2-routing.module';

import { Registro2Page } from './registro2.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    Registro2PageRoutingModule
  ],
  declarations: [Registro2Page]
})
export class Registro2PageModule {}
