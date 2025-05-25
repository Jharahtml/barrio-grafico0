import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro5',
  templateUrl: './registro5.page.html',
  styleUrls: ['./registro5.page.scss'],
  standalone: false,
})
export class Registro5Page implements OnInit {
  avatars = [
  { id: 1, src: '../../../assets/fotoperfil.jpg' },
  { id: 2, src: '../../../assets/fotoperfil2.jpg' },
  { id: 3, src: '../../../assets/fotoperfil.jpg' },
  { id: 4, src: '../../../assets/fotoperfil2.jpg' },
  { id: 5, src: '../../../assets/fotoperfil.jpg' },
  { id: 6, src: '../../../assets/fotoperfil2.jpg' },
  { id: 7, src: '../../../assets/fotoperfil.jpg' },
  { id: 8, src: '../../../assets/fotoperfil2.jpg' },
  { id: 9, src: '../../../assets/fotoperfil.jpg' }
];
selectedAvatar = ''; 
  constructor(
    public router: Router,
  ) {} 
    selectAvatar(avatarSrc: string) {
  this.selectedAvatar = avatarSrc;

  }
  confirmAvatar() {
  this.router.navigate(['/registro6'], { queryParams: { avatar: this.selectedAvatar } }); 
}

  ngOnInit() {
  }


}
