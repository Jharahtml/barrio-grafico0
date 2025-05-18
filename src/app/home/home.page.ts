import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  /* private map!: L.Map; */
  map:any;
  items:any;
  constructor(
    public db: DatabaseService
  ){
    this.db.fetchFirestoreCollection('artspots')
    .subscribe((data: any) => {
      if (data && data.length > 0) {
        this.items = data;
        console.log("Datos cargados correctamente:", this.items);
        this.loadMap();
      }
      else{
        console.error("No se encontraron datos en Firestore.");
      }
    });
  }


  ngOnInit() {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
      }
    }, 500);
    
  }

  loadMap() {

    this.map = L.map('map').setView([-16.5, -68.15], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    
    console.log("Datos obtenidos de Firestore:", this.items);
    console.log("Datos dentro de loadMap():", this.items);
    if (!this.items || this.items.length === 0) {
      console.error("No hay datos para mostrar en el mapa.");
      return;
    }  
    this.items.forEach((element: any) => {
      console.log(`Ubicación de ${element.name}: Lat ${element.latitude}, Lng ${element.longitude}`);


      L.marker([element.latitude, element.longitude]
        , {
          icon: L.icon({
            iconUrl: 'assets/icon/favicon.png',
            iconSize: [38, 38], // Tamaño del icono
            iconAnchor: [22, 94], // Punto del icono que corresponde a las coordenadas del marcador
            popupAnchor: [-15, -88] // Punto desde el que se abrirá el popup en relación al icono
          })
        }
      ).addTo(this.map)
      .bindPopup(`<b>${element.name}</b>`);

    });
    // Ajustar tamaño del mapa después de cargar los datos
  /* setTimeout(() => {
    this.map.invalidateSize();
    this.map.fitBounds(
      this.items.map((item: any) => [item.latitude, item.longitude])
    );  
     }, 500); */

  }
}
