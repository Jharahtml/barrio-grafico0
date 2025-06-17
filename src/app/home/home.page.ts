import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DatabaseService } from '../services/database.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AuthService } from '../services/auth.service';
import { Geolocation } from '@capacitor/geolocation';
import { QrService } from '../services/qr.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  
  map: any;
  items: any;
  currentPosition: any;
  objetoJson = false
  JsonData : any
  constructor(
    public db: DatabaseService,
    public authService: AuthService,
    public qr: QrService
  ){
    /* this.db.fetchFirestoreCollection('artspots')
    .subscribe((data: any) => {
      if (data && data.length > 0) {
        this.items = data;
        console.log("Datos cargados correctamente:", this.items);
        this.loadMap();
        this.getCurrentLocation();
      }
      else{
        console.error("No se encontraron datos en Firestore.");
      }
    }); */
    
  }

  ngOnInit() {
    this.db.fetchFirestoreCollection('artspots')
    .subscribe((data: any) => {
      if (data && data.length > 0) {
        this.items = data;
        console.log("Datos cargados correctamente:", this.items);
        
        this.loadMap();              
        this.getCurrentLocation();   
      } else {
        console.error("No se encontraron datos en Firestore.");
      }
    });
  }

   ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.map) {
        //this.loadMap();
        //this.getCurrentLocation();
        this.map.invalidateSize();
      }
    }, 500);
  } 
  
  async Scan() {
  document.body.classList.add('scanner-active');
  await this.qr.StartScan();

  this.objetoJson = false;
  this.JsonData = undefined;

  let parseResult: any; 

  try {
    parseResult = JSON.parse(this.qr.scanResult);
    console.log("Resultado parseado:", parseResult);

    if (parseResult.exists && parseResult.data) {
      this.objetoJson = true;
      this.JsonData = parseResult.data;
      this.guardarCarta(this.JsonData); // Guardar la carta
    } else {
      console.warn("QR escaneado no contiene una carta válida.");
      document.body.classList.remove('scanner-active');
    }

  } catch (e) {
    console.error("Error al parsear el QR:", e);
    document.body.classList.remove('scanner-active');
  }
  }

  volverAlMapa() {
  this.objetoJson = false;
  this.JsonData = undefined; 
  document.body.classList.remove('scanner-active');

  setTimeout(() => {
    this.loadMap();
    this.getCurrentLocation();
    console.log("Volviendo al mapa...");
  }, 300);
}
  loadMap() {
    if (!document.getElementById('map')) {
    console.error(" Elemento del mapa no encontrado en el DOM.");
    return;
  }
    this.map = L.map('map').setView([-16.5, -68.15], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
      }
    }, 500);

    console.log("Datos obtenidos de Firestore:", this.items);
    if (!this.items || this.items.length === 0) {
      console.error("No hay datos para mostrar en el mapa.");
      return;
    }  

    this.items.forEach((element: any) => {
      /* console.log(`Ubicación de ${element.name}: Lat ${element.latitude}, Lng ${element.longitude}`); */

      L.marker([element.latitude, element.longitude], {
        icon: L.icon({
          iconUrl: 'assets/icon/artspot.png',
          iconSize: [38, 38],
          iconAnchor: [22, 94],
          popupAnchor: [-15, -88]
        })
      }).addTo(this.map)
      .bindPopup(`<b>${element.name}</b>`);
    });
     setTimeout(() => {
    this.map.invalidateSize();
  }, 500);
  }
  
  async getCurrentLocation() {
    try {
     
      if ((window as any).Capacitor && (window as any).Capacitor.isNativePlatform()) {
        const permission = await Geolocation.requestPermissions();
        if (permission.location === 'denied') {
          console.log('permiso denegado')
          return;
        }
        const position = await Geolocation.getCurrentPosition();
        const { latitude, longitude } = position.coords;
        console.log('Ubicación actual:', latitude, longitude);
        this.marcarUbicacion(latitude, longitude);
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Ubicación actual (web):', latitude, longitude);
            this.marcarUbicacion(latitude, longitude);
          },
          (error) => {
            console.error('Error al obtener ubicación (web):', error);
          });
      }
    } catch (error) {
      console.error('Error general al obtener ubicación:', error);
    }
  }

  marcarUbicacion(lat: number, lng: number) {
    if (!this.map) {
    console.error("Mapa no inicializado. Asegúrate de llamar a loadMap() antes.");
    return;
  }
    this.map.setView([lat, lng], 15);
    L.marker([lat, lng], {
      icon: L.icon({
        iconUrl: 'assets/icon/spot.svg',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      })
    }).addTo(this.map).bindPopup('Estás aquí').openPopup();
    L.circle([lat, lng], {
      radius: 100,
      color: '#AD74D6',
      fillColor: '#30f',
      fillOpacity: 0.2
    }).addTo(this.map);
  }
  //guardar carta
  async guardarCarta(carta: any) {
  if (!carta || Object.keys(carta).length === 0) {
    console.error("Carta vacía o inválida, no se puede guardar.");
    return;
  }

  this.authService.getUser().subscribe(async (user) => {
    if (!user || !user.uid) {
      console.error("Usuario no autenticado.");
      return;
    }

    const uid = user.uid;
    const path = `users/${uid}/cartas`;

    try {

      // Agregar a la subcolección
      await this.db.addToSubcollection(`users/${uid}/cartas`, carta);
      console.log("Carta guardada exitosamente en subcolección.");
    } catch (error) {
      console.error("Error al guardar la carta:", error);
    }
  });
}



  //Abre la cámara al presionar botón
  async abrirCamara() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

      const base64 = image.base64String;
      console.log('Imagen capturada:', base64);

      // Aquí podrías guardar, mostrar o subir la imagen

    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  }

  
}
