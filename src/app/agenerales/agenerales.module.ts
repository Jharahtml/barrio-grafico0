import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgeneralesPageRoutingModule } from './agenerales-routing.module';

import { AgeneralesPage } from './agenerales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgeneralesPageRoutingModule
  ],
  declarations: [AgeneralesPage]
})
export class AgeneralesPageModule {}
