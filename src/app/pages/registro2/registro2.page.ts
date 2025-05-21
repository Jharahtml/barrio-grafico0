import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.page.html',
  styleUrls: ['./registro2.page.scss'],
  standalone: false,
})
export class Registro2Page implements OnInit {
  form: FormGroup
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService  
  ) {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]      
    })
  }
  avanzar(){
    console.log(this.form.value);
    if (this.form.valid){
      localStorage.setItem('email', this.form.value.email);
      this.router.navigate(['/registro3'])
    }
  }

  ngOnInit() {
    
  }

}
