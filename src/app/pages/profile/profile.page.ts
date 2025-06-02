import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {
  isLoading = true;
  profile: any;
  
  constructor(
    public auth: AuthService,
    public db: DatabaseService
    
  ){}
  ngOnInit() {
    /* this.cargarDatosCompletos() */ 
    this.profile = this.auth.profile;
  }
  async cargarDatosCompletos() {
    const uid = this.auth.profile?.id;
    if (!uid) return;

    const datosCompletos = {
      points: 2300,
      level: 5,
      cartaFavorita: {
        title: "MicroBless",
        image: "/assets/cards/microbless.png",
        artist: "Bless",
        technique: "Grafitti",
        type: "Shiny",
        points: 500,
        address: "Puente de las Américas",
        year: 2025
      },
      cartas: [
        {
          title: "kadeton",
          image: "/assets/cards/kadeton.png",
          artist: "Kadeton",
          technique: "Graffitti",
          type: "Normal",
          points: 250,
          address: "Av. 16 de julio Esq. Bueno",
          year: 2023
        },
        {
          title: "1BS",
          image: "/assets/cards/1bs.png",
          artist: "un boliviano",
          technique: "Graffitti",
          type: "Normal",
          points: 250,
          address: "Obelisco",
          year: 2023
        }
      ],
      amigos: [
        {
          id: "amigo_002",
          nombre: "amigei666",
          avatar: "https://ejemplo.com/avatar-laura.jpg",
          puntos: 920,
          nivel: 5,
          cartaFavorita: {
            title: "clowndeton",
            image: "/assets/cards/1bs.png",
            artist: "kadeton",
            technique: "Graffitti",
            type: "Shiny",
            points: 600,
            address: "C. Lucas Jaimes",
            year: 2020
          }
        }
      ],
      historial: {
        eventos: [
          {
            nombreEvento: "Carnaval",
            puntosGanados: 1000,
            fecha: new Date().toISOString()
          }
        ]
      }
    };

    try {
      await this.db.updateFireStoreDocument('users', uid, datosCompletos);
      console.log('Datos cargados correctamente');
    } catch (error) {
      console.error('Error al cargar datos:', error);
    }
  }
  updateProfile() {
  const uid = this.auth.profile?.id;
  if (!uid) return;

  const updatedData = {
      name: this.profile.name,
      avatar: this.profile.avatar,
    };
  try{
    this.db.updateFireStoreDocument('users', uid, updatedData);
   
  }

  catch (error) {
      console.error('Error al actualizar perfil:', error);
    }

}

}