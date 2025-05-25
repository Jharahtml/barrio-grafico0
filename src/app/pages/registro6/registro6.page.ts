import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro6',
  templateUrl: './registro6.page.html',
  styleUrls: ['./registro6.page.scss'],
  standalone: false,
})
export class Registro6Page implements OnInit {
  aceptado: boolean = false;
  form: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public auth: AuthService,
    public router: Router
    
  ) { 
    this.form = this.formBuilder.group({
      avatar: [''],
      acceptTerms: [false, Validators.requiredTrue] 
    });

  }

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
    if (params['avatar']) {
      this.form.patchValue({ avatar: params['avatar'] }); 
    }
  });
  }

  finalizarRegistro(){
    const datosUser = {
      email: localStorage.getItem('email') || "",
      password: localStorage.getItem('password') || "",
      name: localStorage.getItem('name') || this.form.value.name, 
      avatar: this.form.value.avatar || '' 
};
  console.log('Datos del usuario:', datosUser);

  this.auth.registerUser(datosUser.email, datosUser.password, datosUser)
  .then(() => {
      console.log('Registro exitoso, redirigiendo al perfil...');
     // this.router.navigate(['/profile']); 
     //this.auth.loginUser(datosUser.email, datosUser.password)
    })
    .catch(error => {
      console.error('Error al registrar usuario:', error);
    });

  }  

}



