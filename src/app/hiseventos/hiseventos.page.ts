import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiseventos',
  templateUrl: './hiseventos.page.html',
  styleUrls: ['./hiseventos.page.scss'],
  standalone: false,
})
export class HiseventosPage implements OnInit {
  currentPage = 'eventos';

  constructor() { }

  ngOnInit() {
  }

}
