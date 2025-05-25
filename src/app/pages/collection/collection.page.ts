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
  filteredCartas: any[] = []
  constructor(
    public db: DatabaseService,
    public auth: AuthService,
    public modalController: ModalController
  ) {}

   ngOnInit() {
    
    this.auth.afAuth.authState.subscribe(user => {
    if (user) {
      this.db.getCartas(user.uid).subscribe(cartas => {
        this.cartas = cartas;
        this.filteredCartas = cartas;
        console.log('Cartas obtenidas:', cartas);
      });

      this.db.getDocumentById('users', user.uid).subscribe(userData => {
        this.cartaFavorita = userData?.cartaFavorita;
        console.log('Carta favorita recuperada:', this.cartaFavorita);
      });
    }
  });
}
filterByType(type: string) {
    console.log('Filtrando cartas por tipo:', type);
    if (type.toLowerCase() === 'all') { 
      this.filteredCartas = this.cartas; 
    } else if (type.toLowerCase() === 'shiny'){
      this.filteredCartas = this.cartas.filter(carta => carta.type?.toLowerCase() === 'shiny');
    }
    else if(type.toLowerCase() === 'normal'){
      this.filteredCartas = this.cartas.filter(carta => carta.type?.toLowerCase() === 'normal');
    }
    else {
      console.warn('Tipo no reconocido:', type);
      this.filteredCartas = []; 
    }

    console.log(`Filtrando por tipo: ${type}`, this.filteredCartas);
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



