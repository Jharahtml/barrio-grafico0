import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  standalone: false,
})
export class EventosPage implements OnInit {
  eventos: any[] = [];
  constructor(
    public db: DatabaseService
  ) { }

  ngOnInit() {
  this.db.fetchFirestoreCollection('eventos').subscribe((res: any[]) => {
  this.eventos = res;
});
  }
  
}
