import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
  standalone: false,
})
export class EditarPage implements OnInit {
  profile: any;

  constructor(
    public auth: AuthService,
    public db: DatabaseService
  ) {}

  ngOnInit() {
    // Clonamos el perfil actual para edición (para evitar cambios en tiempo real)
    this.profile = { ...this.auth.profile };
  }

  async updateProfile() {
    const uid = this.auth.profile?.id;
    if (!uid) return;

    const updatedData = {
      name: this.profile.name,
      avatar: this.profile.avatar,
    };

    try {
      await this.db.updateFireStoreDocument('users', uid, updatedData);
      console.log('Perfil actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
    }
  }
}
