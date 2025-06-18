import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hismisiones',
  templateUrl: './hismisiones.page.html',
  styleUrls: ['./hismisiones.page.scss'],
  standalone: false,
})
export class HismisionesPage implements OnInit {
  currentPage = 'misiones';

  constructor() { }

  ngOnInit() {
  }

}
