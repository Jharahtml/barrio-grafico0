import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Amigos1PageRoutingModule } from './amigos1-routing.module';

import { Amigos1Page } from './amigos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Amigos1PageRoutingModule
  ],
  declarations: [Amigos1Page]
})
export class Amigos1PageModule {}
