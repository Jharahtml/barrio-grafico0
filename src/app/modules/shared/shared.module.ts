import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProfileComponent } from 'src/app/components/menu-profile/menu-profile.component';
import { IonicModule } from '@ionic/angular';
import { CartaModalComponent } from 'src/app/components/carta-modal/carta-modal.component';



@NgModule({
  declarations: [MenuProfileComponent, CartaModalComponent],
  imports: [
    CommonModule, IonicModule,
  ],
  exports:[
    MenuProfileComponent, CartaModalComponent
  ]
})
export class SharedModule { }
