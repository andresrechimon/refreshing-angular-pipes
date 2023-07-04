import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');
    nombres = nombres.map(nombre => {
      return nombre[0].toUpperCase() + nombre.substring(1);
    })
    return nombres.join(' ');
  }

}
