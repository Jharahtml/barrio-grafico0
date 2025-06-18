import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histradeos',
  templateUrl: './histradeos.page.html',
  styleUrls: ['./histradeos.page.scss'],
  standalone: false,
})
export class HistradeosPage implements OnInit {
  currentPage = 'tradeos';

  constructor() { }

  ngOnInit() {
  }

}
