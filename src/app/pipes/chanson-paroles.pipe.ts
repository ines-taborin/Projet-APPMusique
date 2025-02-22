import { Pipe, PipeTransform } from '@angular/core';
import { Liste } from '../interfaces/liste';

@Pipe({
  name: 'chansonParoles',
  standalone: true
})
export class ChansonParolesPipe implements PipeTransform {

  transform(liste: Liste): Liste {
    var chansonsFiltrees = liste.chansons.filter((chanson) => chanson.paroles.length > 0);
    liste.chansons = chansonsFiltrees;
    return liste;
  }

}
