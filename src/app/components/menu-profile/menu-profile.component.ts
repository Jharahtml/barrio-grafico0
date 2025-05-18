import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-profile',
  templateUrl: './menu-profile.component.html',
  styleUrls: ['./menu-profile.component.scss'],
  standalone: false,
})
export class MenuProfileComponent  implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  navigateToCollection() {
  this.router.navigate(['/collection']); // Navegación simple
}
}
