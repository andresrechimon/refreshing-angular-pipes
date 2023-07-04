import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre:string = 'Andrés Rechimon';

  nombre2:string = 'fÁTIma cOrrEa';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI:number = Math.PI;

  porcentaje:number = 0.33;

  salario:number = 1234.5;

  streetfighter_pj:Object = {
    nombre: 'Guile',
    pais: 'U.S.A',
    movimiento_favorito: 'Flash kick'
  };

  fecha:Date = new Date();

  video:string = 'https://www.youtube.com/embed/dQw4w9WgXcQ';

  activar:boolean = true;
}
