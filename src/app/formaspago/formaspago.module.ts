import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormaspagoPageRoutingModule } from './formaspago-routing.module';

import { FormaspagoPage } from './formaspago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormaspagoPageRoutingModule
  ],
  declarations: [FormaspagoPage]
})
export class FormaspagoPageModule {}
