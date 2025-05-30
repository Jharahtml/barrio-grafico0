import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LacomercioPageRoutingModule } from './lacomercio-routing.module';

import { LacomercioPage } from './lacomercio.page';
import{ SharedModule } from '../modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LacomercioPageRoutingModule
  ],
  declarations: [LacomercioPage]
})
export class LacomercioPageModule {}
