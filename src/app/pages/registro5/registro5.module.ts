import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro5PageRoutingModule } from './registro5-routing.module';

import { Registro5Page } from './registro5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registro5PageRoutingModule
  ],
  declarations: [Registro5Page]
})
export class Registro5PageModule {}
