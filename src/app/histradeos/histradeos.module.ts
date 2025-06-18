import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistradeosPageRoutingModule } from './histradeos-routing.module';

import { HistradeosPage } from './histradeos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistradeosPageRoutingModule
  ],
  declarations: [HistradeosPage]
})
export class HistradeosPageModule {}
