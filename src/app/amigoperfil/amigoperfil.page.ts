import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-amigoperfil',
  templateUrl: './amigoperfil.page.html',
  styleUrls: ['./amigoperfil.page.scss'],
  standalone: false,
})
export class AmigoperfilPage implements OnInit {
  amigo: any;
  constructor(
    public db: DatabaseService,
    public route: ActivatedRoute
  ) { }

ngOnInit() {
  const userId = this.route.snapshot.paramMap.get('id'); 
  console.log('ID del usuario seleccionado:', userId);

  if (userId) {
    this.db.getDocumentById('users', userId).subscribe(userData => {
      if (userData) {
        this.amigo = userData; 
        console.log('Datos del amigo cargados:', this.amigo);
      } else {
        console.error('No se encontraron datos para este usuario.');
      }
    }, error => {
      console.error('Error al obtener los datos del usuario:', error);
    });
  } else {
    console.error('No se recibió un ID válido.');
  }
}
}

