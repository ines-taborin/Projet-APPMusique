import { Pipe, PipeTransform } from '@angular/core';
import { Liste } from '../interfaces/liste';

@Pipe({
  name: 'chansonTresPopulaire',
  standalone: true
})
export class ChansonEcouteesPipe implements PipeTransform {

  transform(liste: Liste, nombreEcoutes:number): Liste {
    var chansonsFiltrees = liste.chansons.filter((chanson) => chanson.nombreLectures > nombreEcoutes);
    liste.chansons = chansonsFiltrees;
    return liste;
  }

}
