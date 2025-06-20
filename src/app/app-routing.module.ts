import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro2',
    loadChildren: () => import('./pages/registro2/registro2.module').then( m => m.Registro2PageModule)
  },
  {
    path: 'registro3',
    loadChildren: () => import('./pages/registro3/registro3.module').then( m => m.Registro3PageModule)
  },
  {
    path: 'registro4',
    loadChildren: () => import('./pages/registro4/registro4.module').then( m => m.Registro4PageModule)
  },
  {
    path: 'registro5',
    loadChildren: () => import('./pages/registro5/registro5.module').then( m => m.Registro5PageModule)
  },
  {
    path: 'registro6',
    loadChildren: () => import('./pages/registro6/registro6.module').then( m => m.Registro6PageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'amigoperfil/:id',
    loadChildren: () => import('./amigoperfil/amigoperfil.module').then( m => m.AmigoperfilPageModule)
  },
  {
    path: 'formaspago',
    loadChildren: () => import('./formaspago/formaspago.module').then( m => m.FormaspagoPageModule)
  },
  {
    path: 'tarjetas',
    loadChildren: () => import('./tarjetas/tarjetas.module').then( m => m.TarjetasPageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'amigos1',
    loadChildren: () => import('./amigos1/amigos1.module').then( m => m.Amigos1PageModule)
  },
  {
    path: 'enviadas',
    loadChildren: () => import('./enviadas/enviadas.module').then( m => m.EnviadasPageModule)
  },
  {
    path: 'recibidas',
    loadChildren: () => import('./recibidas/recibidas.module').then( m => m.RecibidasPageModule)
  },
  {
    path: 'lacomercio',
    loadChildren: () => import('./lacomercio/lacomercio.module').then( m => m.LacomercioPageModule)
  },
  {
    path: 'canasta',
    loadChildren: () => import('./canasta/canasta.module').then( m => m.CanastaPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'editar1',
    loadChildren: () => import('./editar1/editar1.module').then( m => m.Editar1PageModule)
  },  {
    path: 'hiseventos',
    loadChildren: () => import('./hiseventos/hiseventos.module').then( m => m.HiseventosPageModule)
  },
  {
    path: 'hismisiones',
    loadChildren: () => import('./hismisiones/hismisiones.module').then( m => m.HismisionesPageModule)
  },
  {
    path: 'histradeos',
    loadChildren: () => import('./histradeos/histradeos.module').then( m => m.HistradeosPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'acuenta',
    loadChildren: () => import('./acuenta/acuenta.module').then( m => m.AcuentaPageModule)
  },
  {
    path: 'agenerales',
    loadChildren: () => import('./agenerales/agenerales.module').then( m => m.AgeneralesPageModule)
  },
  {
    path: 'ainformacion',
    loadChildren: () => import('./ainformacion/ainformacion.module').then( m => m.AinformacionPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }