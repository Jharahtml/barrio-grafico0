import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviadasPageRoutingModule } from './enviadas-routing.module';

import { EnviadasPage } from './enviadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviadasPageRoutingModule
  ],
  declarations: [EnviadasPage]
})
export class EnviadasPageModule {}
