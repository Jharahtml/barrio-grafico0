import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro6PageRoutingModule } from './registro6-routing.module';

import { Registro6Page } from './registro6.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    Registro6PageRoutingModule
  ],
  declarations: [Registro6Page]
})
export class Registro6PageModule {}
