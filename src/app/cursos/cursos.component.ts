import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  template: `
  <img [src] = "imagenURL"/><br/>
  <button [disabled] = "botonStatus">Mi Boton</button><br>
  <button [class.activo] = "isActive">Mi Boton2</button><br>
  <button [style.borderColor] = "isActive2 ? 'green' : 'white'">Mi Boton 3</button><br>
  <button (click) = "save($event)">Guardar</button><br>
  <button (mouseover) = "save($event)">Guardar2</button><br>
  <input type = "text" (keyup) = "onKeyUp($event)"/><br>
  <input type = "text" (keyup.enter) = "onKeyUp2()"/><br>
  <input type = "text" (keyup.enter) = "onKeyUp3(variable.value)" #variable/><br>
  `,
  templateUrl:"./cursos.component.html",
  styles: [`
    .activo{
      background: green;
    }
  `]
})
export class CursosComponent implements OnInit {

  nombre = 'Luis';
  imagenURL = "https://eloutput.com/app/uploads-eloutput.com/2019/03/sonic-real-imagen-pelicula.jpg";
  botonStatus = true;
  isActive = true;
  isActive2 = true;

  persona = {
    name: 'Lucho',
    edad: 20
  }
  


  getNombre(){
    return this.nombre;
  }
  save(e){
    console.log(e);
  }
  onKeyUp(e){
    if (e.keyCode === 13) {
      console.log("Enter fue presionado");
    }
  }
  onKeyUp2(){
    console.log("enter fue presionado");
  }
  onKeyUp3(usuario){
    console.log(usuario);
  }

  /* constructor() { }*/

  ngOnInit(): void {
  }

}
