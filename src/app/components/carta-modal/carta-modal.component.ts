import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carta-modal',
  templateUrl: './carta-modal.component.html',
  styleUrls: ['./carta-modal.component.scss'],
  standalone: false
})
export class CartaModalComponent implements OnInit{
  @Input() carta: any;
  constructor(
    public modalController: ModalController
  ) {}
  ngOnInit() {
  console.log("Datos en el modal:", this.carta);
  /* if (!this.carta) {
    console.log("⚠️ Los datos de la carta son `undefined` en la UI.");
  } */

}

  cerrarModal(){
    this.modalController.dismiss();
  }
}
