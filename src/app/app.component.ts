import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = 'Curso Angular';

  getMensaje(){
    return this.mensaje;
  }
  /* personas : any = [];
  constructor(private usuariosservice: UsuariosService){
    this.personas = usuariosservice.getUsuarios();
  } */
  constructor(){

  }
  miFormulario = new FormGroup({
    username : new FormControl('', Validators.required),
    userpassword : new FormControl('', Validators.required)
  });
  
}
