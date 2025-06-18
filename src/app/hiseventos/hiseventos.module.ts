import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiseventosPageRoutingModule } from './hiseventos-routing.module';

import { HiseventosPage } from './hiseventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiseventosPageRoutingModule
  ],
  declarations: [HiseventosPage]
})
export class HiseventosPageModule {}
