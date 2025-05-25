import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
  standalone: false,
})
export class AmigosPage implements OnInit {
  amigos: any[] = [];
  resultadoBusqueda: any[] = [];
  constructor(
    public db: DatabaseService,
    public auth: AuthService
  ) { 
    
  }

ngOnInit() {
  this.auth.afAuth.authState.subscribe(user => {
    if (user) {
      this.db.getDocumentById('users', user.uid).subscribe(userData => {
        console.log('Usuario obtenido:', userData); 

        if (userData && userData.amigos) {
          this.amigos = userData.amigos;
          console.log('Amigos obtenidos:', this.amigos);
        } else {
          console.log('No hay amigos disponibles.');
          this.amigos = [];
        }
      }, error => {
        console.error('Error al obtener datos del usuario:', error);
      });
    } else {
      console.error('No hay usuario autenticado.');
    }
  });
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

}
