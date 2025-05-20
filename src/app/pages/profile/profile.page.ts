import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage {
  // Define la propiedad userData con la estructura que usas en el template
  userData: {
    photoURL?: string;
    displayName?: string;
    points?: number;
    favoriteCard?: {
      image?: string;
      artist?: string;
      technique?: string;
      rarity?: string;
      location?: string;
    };
  } = {
    // Valores por defecto que coincidan con tus fallbacks en el template
    photoURL: 'assets/fotoperfil.jpg',
    displayName: 'Nombre de usuario',
    points: 0,
    favoriteCard: {
      image: 'assets/cards/microBless.png',
      artist: 'BLESS',
      technique: 'Graffiti',
      rarity: 'Shiny',
      location: 'Plaza Avaroa'
    }
  };

  constructor() {
    // Aquí deberías cargar los datos reales del usuario
    // por ejemplo, desde un servicio:
    // this.loadUserData();
  }

  // Ejemplo de método para cargar datos
  /*
  loadUserData() {
    this.userService.getUserData().subscribe(data => {
      this.userData = data;
    });
  }
  */
}