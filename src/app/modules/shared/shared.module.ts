import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuProfileComponent } from 'src/app/components/menu-profile/menu-profile.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MenuProfileComponent],
  imports: [
    CommonModule, IonicModule
  ],
  exports:[
    MenuProfileComponent
  ]
})
export class SharedModule { }
