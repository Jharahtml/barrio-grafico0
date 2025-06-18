import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

 interface Solicitud {
    estado: string;
    timestamp: any;
    id?: string;
  }
@Component({
  selector: 'app-enviadas',
  templateUrl: './enviadas.page.html',
  styleUrls: ['./enviadas.page.scss'],
  standalone: false,
})
export class EnviadasPage implements OnInit {
  solicitudes: any[] = [];
  uid: string = '';
  solicitudesEnviadasDatos: any[] = [];

  constructor(
    public db: DatabaseService,
    public auth: AuthService
  ) { }

  ngOnInit() {
   this.auth.afAuth.authState.subscribe(user => {
    if (user) {
      this.uid = user.uid;
      this.cargarSolicitudesEnviadas();
    }
  });
}

cargarSolicitudesEnviadas() {
  this.db.getSubcollectionSafe<Solicitud>('users', this.uid, 'solicitudes_enviadas')
    .subscribe(solicitudes => {
      this.solicitudes = solicitudes;
    });
}
cancelarSolicitud(amigoId: string) {
  this.db.cancelarSolicitud(this.uid, amigoId).then(() => {
    this.solicitudesEnviadasDatos = this.solicitudesEnviadasDatos.filter(s => s.id !== amigoId);
  });
}
}
