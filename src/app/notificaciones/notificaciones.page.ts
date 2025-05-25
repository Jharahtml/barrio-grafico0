import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  standalone: false,
})
export class NotificacionesPage implements OnInit {
  notificaciones = [
    {
      mensaje: 'Te han invitado a una misión grupal',
    },
    {
      mensaje: 'lobe68 ha publicado un intercambio',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
