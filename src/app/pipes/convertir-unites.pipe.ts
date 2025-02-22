import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirUnites',
  standalone: true
})
export class ConvertirUnitesPipe implements PipeTransform {

  transform(nombreSauvegardes: number): string {
    if(nombreSauvegardes === undefined) return '';
    if (nombreSauvegardes >= 1000000) {
      const formatted = Math.floor(nombreSauvegardes / 1000000);
      return `${formatted}M`;
    } else if (nombreSauvegardes >= 1000) {
      const formatted = Math.floor(nombreSauvegardes / 1000);
      return `${formatted}k`;
    } else {
      return nombreSauvegardes.toString();
    }
  }

}
