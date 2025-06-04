import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lacomercio',
  templateUrl: './lacomercio.page.html',
  styleUrls: ['./lacomercio.page.scss'],
  standalone: false,
})
export class LacomercioPage implements OnInit {
  productos:any [] = [];
  merch:any [] = [];
  tickets:any [] = [];
  puntos: number = 0;
  userId: string = '';
  
  //Modal
  mostrarModal: boolean = false;
  productoSeleccionado: any;
  carrito: any[] = [];

  constructor(
    public db: DatabaseService,
    public authService: AuthService,
    public alertController: AlertController
  ) {}
  ngOnInit() {
    this.fetchProductos();
    this.getUserProfile();
  }
  
  fetchProductos() {
  this.db.fetchFirestoreCollection('comercio').subscribe({
    next: (res: any[]) => {
      this.productos = res;
      console.log('Productos de Firestore:', res);

    this.merch = res.filter(producto => producto.type === 'merch');
    this.tickets = res.filter(producto => producto.type === 'ticket')

      console.log('Productos en merch:', this.merch);

    },
    error: (err) => {
      console.error('Error al cargar productos desde Firestore:', err);
    }
  }); 
  
}
getUserProfile() {
    this.authService.afAuth.authState.subscribe(user => {
      if (user) {
        console.log('Usuario autenticado:', user);
        this.userId = user.uid;

        this.db.getDocumentById('users', this.userId).subscribe(userData => {
           console.log('Datos del usuario desde Firebase:', userData);
          if (userData && userData.points) {
            this.puntos = userData.points;
            console.log('Puntos del usuario:', this.puntos);
          } else {
            console.log('No se encontraron puntos para el usuario.');
          }
        }, error => {
          console.error('Error al obtener datos del usuario:', error);
        });
      } else {
        console.error('No hay usuario autenticado.');
      }
    });
}
  abrirModal(producto: any) {
    console.log('Producto seleccionado:', producto);
    this.productoSeleccionado = producto;
    this.mostrarModal = true;
  }
  cerrarModal() {
    console.log('Cerrando modal...');
    this.mostrarModal = false;
  }
async mostrarMensaje(mensaje: string) {
  const alert = await this.alertController.create({
    header: 'Aviso',
    message: mensaje,
    buttons: ['OK']
  });
  
  await alert.present();
}  
async comprarProducto(producto: any) {
  const precioProducto = producto.price; 
  const puntosUsuario = this.puntos; 

  if (puntosUsuario < precioProducto) {
    this.mostrarMensaje('No tienes puntos suficientes'); 
    console.log('Puntos insuficientes para la compra');
    return;
  }

  // Descontar puntos del usuario
  const nuevosPuntos = puntosUsuario - precioProducto;
  await this.db.updateFireStoreDocument('users', this.userId, { points: nuevosPuntos });

  //  Actualizar puntos en la sesión actual
  this.puntos = nuevosPuntos;
  this.getUserProfile();

  this.mostrarMensaje('Compra realizada con éxito'); // Confirmación
} 
}

