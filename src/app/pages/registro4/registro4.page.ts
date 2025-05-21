import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro4',
  templateUrl: './registro4.page.html',
  styleUrls: ['./registro4.page.scss'],
  standalone: false,
})
export class Registro4Page implements OnInit {
  form: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService  
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  

  ngOnInit() {
  }
  avanzar(){
    if (this.form.valid){
      const datosUser = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        name: this.form.value.name
      }
       localStorage.setItem('name', this.form.value.name);

      this.router.navigate(['/registro5'])
    }
  }

}
