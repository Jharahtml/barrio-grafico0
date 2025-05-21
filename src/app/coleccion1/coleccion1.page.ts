import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coleccion1',
  templateUrl: './coleccion1.page.html',
  styleUrls: ['./coleccion1.page.scss'],
  standalone: false,
})
export class Coleccion1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/home']); // cámbielo por la ruta anterior si es otra
  }

}
