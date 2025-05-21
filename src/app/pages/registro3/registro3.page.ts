import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro3',
  templateUrl: './registro3.page.html',
  styleUrls: ['./registro3.page.scss'],
  standalone: false,
})
export class Registro3Page implements OnInit {
  form: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService  
  ) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {validators: this.passwordMatchValidator}
  );
  }
  

  ngOnInit() {
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  avanzar(){
 if (this.form.valid){
  localStorage.setItem('password', this.form.value.password); 
  localStorage.setItem('confirmPassword', this.form.value.confirmPassword)
  const datosUser = {
    email: localStorage.getItem('email'),
    password: this.form.value.password,
    confirmPassword: this.form.value.confirmPassword
  }
  this.router.navigate(['/registro4'])
}
}
}