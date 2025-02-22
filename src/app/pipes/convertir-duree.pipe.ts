import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirDuree',
  standalone: true,
})
export class ConvertirDureePipe implements PipeTransform {
  transform(dureeEnSecondes: number): string {
    const hours = Math.floor(dureeEnSecondes / 3600);
    const minutes = Math.floor((dureeEnSecondes % 3600) / 60);
    const secondes = dureeEnSecondes % 60;
    return hours > 0
      ? `${hours}${minutes < 10 ? '0' + minutes : minutes}:${secondes < 10 ? '0' + secondes : secondes}`
      : `${minutes}:${secondes < 10 ? '0' + secondes : secondes}`;
  }
}
