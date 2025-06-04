import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editar1',
  templateUrl: './editar1.page.html',
  styleUrls: ['./editar1.page.scss'],
  standalone: false,
})
export class Editar1Page implements OnInit {
  avatarUrl: string = '';
  avatars: string[] = [
    'assets/fotoperfil.jpg',
    'assets/fotoperfil1.png',
    'assets/amigoPerfil.png',
    'assets/fotoperfil1.png',
    'assets/amigoPerfil.png',
    'assets/fotoperfil.jpg',
    'assets/amigoPerfil.png',
    'assets/fotoperfil.jpg',
    'assets/fotoperfil1.png'
  ];

  constructor(
    public auth: AuthService,
    public db: DatabaseService
  ) {}

  ngOnInit() {
    this.avatarUrl = this.auth.profile?.avatar || '';
  }

  selectAvatar(url: string) {
    this.avatarUrl = url;
  }

  async updateAvatar() {
    const uid = this.auth.profile?.id;
    if (!uid || !this.avatarUrl) return;

    try {
      await this.db.updateFireStoreDocument('users', uid, {
        avatar: this.avatarUrl
      });
      console.log('Avatar actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar avatar:', error);
    }
  }
}
