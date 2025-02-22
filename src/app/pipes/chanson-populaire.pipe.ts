import { Pipe, PipeTransform } from '@angular/core';
import { Chanson } from '../interfaces/chanson';
import { Liste } from '../interfaces/liste';

@Pipe({
  name: 'chansonPopulaire',
  standalone: true
})
export class ChansonPopulairePipe implements PipeTransform {

  transform(liste: Liste): Liste {
    const chansonsFiltrees = liste.chansons.filter((chanson:Chanson) => chanson.nombreLectures > 5000);
    liste.chansons = chansonsFiltrees;
    return liste;
  }

}
