import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { CartaModalComponent } from 'src/app/components/carta-modal/carta-modal.component';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
  standalone: false,
})
export class CollectionPage implements OnInit {
  cartas: any[] = [];
  cartaFavorita: any;
  constructor(
    public db: DatabaseService,
    public auth: AuthService,
    public modalController: ModalController
  ) {}

   ngOnInit() {
    /* this.auth.afAuth.authState.subscribe(user => {
      if (user) {
        this.db.getCartas(user.uid).subscribe(cartas => {
          this.cartas = cartas;
          console.log('Cartas obtenidas:', cartas);
        });
      }
    });
   
    
    this.auth.afAuth.authState.subscribe(user => {
    if (user) {
      this.db.getDocumentById('users', user.uid).subscribe(userData => {
        this.cartaFavorita = userData?.cartaFavorita;
        console.log('Carta favorita recuperada:', this.cartaFavorita);
      });
    }
  }); */
    this.auth.afAuth.authState.subscribe(user => {
    if (user) {
      // 🔹 Obtener cartas
      this.db.getCartas(user.uid).subscribe(cartas => {
        this.cartas = cartas;
        console.log('Cartas obtenidas:', cartas);
      });

      // 🔹 Obtener carta favorita
      this.db.getDocumentById('users', user.uid).subscribe(userData => {
        this.cartaFavorita = userData?.cartaFavorita;
        console.log('Carta favorita recuperada:', this.cartaFavorita);
      });
    }
  });
}


async abrirModal(carta: any) {
  console.log('Carta seleccionada:', carta);
  const modal = await this.modalController.create({
    component: CartaModalComponent,
    componentProps: { carta }
  });
  console.log('Intentando abrir el modal...');
  return modal.present();


}

}



