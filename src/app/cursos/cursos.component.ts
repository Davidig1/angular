import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  template: `
  <img [src] = "imagenURL"/><br/>
  <button [disabled] = "botonStatus">Mi Boton</button><br>
  <button [class.activo] = "isActive">Mi Boton2</button><br>
  <button [style.borderColor] = "isActive2 ? 'green' : 'white'">Mi Boton 3</button>
  `,
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
  


  getNombre(){
    return this.nombre;
  }

  /* constructor() { }*/

  ngOnInit(): void {
  }

}
