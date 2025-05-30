import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProfileComponent } from 'src/app/components/menu-profile/menu-profile.component';
import { IonicModule } from '@ionic/angular';
import { CartaModalComponent } from 'src/app/components/carta-modal/carta-modal.component';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [MenuProfileComponent, CartaModalComponent, CardComponent],
  imports: [
    CommonModule, IonicModule,
  ],
  exports:[
    MenuProfileComponent, CartaModalComponent, CardComponent
  ]
})
export class SharedModule { }
