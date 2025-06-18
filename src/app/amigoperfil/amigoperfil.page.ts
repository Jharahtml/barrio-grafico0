import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-amigoperfil',
  templateUrl: './amigoperfil.page.html',
  styleUrls: ['./amigoperfil.page.scss'],
  standalone: false,
})
export class AmigoperfilPage implements OnInit {
  amigo: any = {};
  constructor(
    public db: DatabaseService,
    public route: ActivatedRoute,
    public auth: AuthService
  ) { }

ngOnInit() {
    const amigoId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID recibido:', amigoId);

    if (amigoId) {
      this.auth.afAuth.authState.subscribe(user => {
        if (user) {
          this.db.getDocumentById('users', user.uid).subscribe(userData => {
            if (userData && userData.amigos) {
              const amigoEncontrado = userData.amigos.find((amigo: any) => amigo.id === amigoId);

              if (amigoEncontrado) {
                this.amigo = amigoEncontrado;
                console.log('Amigo encontrado en el array:', this.amigo);
              } else {
                console.log('Este ID no está en el array de amigos, buscando en la colección "users"...');

                this.db.getDocumentById('users', amigoId).subscribe(userData => {
                  if (userData) {
                    this.amigo = userData;
                    console.log('Amigo encontrado en la colección "users":', this.amigo);
                  } else {
                    console.error('No se encontraron datos en "users".');
                  }
                }, error => {
                  console.error('Error al obtener datos del usuario:', error);
                });
              }
            }
          }, error => {
            console.error('Error al obtener datos del usuario logueado:', error);
          });
        }
      });
    } else {
      console.error('No se recibió un ID válido.');
    }
  }
}


