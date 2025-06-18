import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
interface Solicitud {
  estado: string;
  timestamp: any;
  id?: string;
}
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
  standalone: false,
})
export class AmigosPage implements OnInit {
  amigos: any[] = [];
  
  resultadoBusqueda: any[] = [];
  solicitudesEnviadas: string[] = [];
  miUid: string = '';
  constructor(
    public db: DatabaseService,
    public auth: AuthService,
    public router: Router
  ) { 
    
  }

ngOnInit() {
  this.auth.afAuth.authState.subscribe(user => {
    if (user) {
      this.miUid = user.uid;
      this.db.getDocumentById('users', user.uid).subscribe(userData => {
        console.log('Usuario obtenido:', userData); 

        if (userData && userData.amigos) {
          this.amigos = userData.amigos;
          
          console.log('Amigos obtenidos:', this.amigos);
        } else {
          console.log('No hay amigos disponibles.');
          this.amigos = [];
        }
         this.db.getDocumentById('users', user.uid).subscribe(userData => {
      //this.amigos = userData?.amigos || [];
      const amigoIds: string[] = userData?.amigos || [];

if (amigoIds.length > 0) {
  Promise.all(amigoIds.map(id => this.db.getDocumentById('users', id).toPromise()))
    .then(amigosData => {
      this.amigos = amigosData;
    })
    .catch(error => {
      console.error('Error al cargar los datos de los amigos:', error);
    });
} else {
  this.amigos = [];
}
    });

    // Solicitudes ya enviadas
    this.db.getSubcollectionSafe<Solicitud>('users', user.uid, 'solicitudes_enviadas')
      .subscribe(solicitudes => {
        this.solicitudesEnviadas = solicitudes.map(s => s.id!);
      });

      }, error => {
        console.error('Error al obtener datos del usuario:', error);
      });
    } else {
      console.error('No hay usuario autenticado.');
    }
  }); 
}
verAmigo(amigoId: string) {
    this.router.navigate(['/amigoperfil', amigoId]); 
  }

buscarAmigo(name: string) {
  if (!name.trim()) {
    this.resultadoBusqueda = [];
    return;
  }

  this.db.searchCollectionByFieldPrefix('users', 'name', name)
    .subscribe(resultados => {
      console.log(`Resultados de búsqueda para "${name}":`, resultados);
      this.resultadoBusqueda = resultados;
    }, error => {
      console.error('Error en la búsqueda:', error);
    });
}
async enviarSolicitud(amigo: any) {
  if (!this.miUid) return;

  try {
    await this.db.enviarSolicitudAmistad(this.miUid, amigo.id, {
      id: amigo.id,
      name: amigo.name,
      avatar: amigo.avatar
    });

    //cambio del botón
    this.solicitudesEnviadas = [...this.solicitudesEnviadas, amigo.id];
  } catch (error) {
    console.error('Error al enviar solicitud:', error);
  }
}
esAmigo(amigoId: string): boolean {
  return this.amigos.some(amigo => amigo.id === amigoId);
}

}
