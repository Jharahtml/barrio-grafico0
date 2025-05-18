import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro3PageRoutingModule } from './registro3-routing.module';

import { Registro3Page } from './registro3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registro3PageRoutingModule
  ],
  declarations: [Registro3Page]
})
export class Registro3PageModule {}
