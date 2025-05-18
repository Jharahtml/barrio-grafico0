import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.page.html',
  styleUrls: ['./collection.page.scss'],
  standalone: false,
})
export class CollectionPage implements OnInit {
  cartas: any[] = [];
  constructor(
    public db: DatabaseService,
    public auth: AuthService
  ) {}

   ngOnInit() {
    this.auth.afAuth.authState.subscribe(user => {
      if (user) {
        this.db.getCartas(user.uid).subscribe(cartas => {
          this.cartas = cartas;
          console.log('Cartas obtenidas:', cartas);
        });
      }
    });
  }
}



