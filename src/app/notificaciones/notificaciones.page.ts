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
      mensaje: 'Tu reserva en The Westin ha sido confirmada.',
    },
    {
      mensaje: 'Disfruta de un 20% en tu próxima estadía.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
