import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmigoperfilPageRoutingModule } from './amigoperfil-routing.module';

import { AmigoperfilPage } from './amigoperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmigoperfilPageRoutingModule
  ],
  declarations: [AmigoperfilPage]
})
export class AmigoperfilPageModule {}
