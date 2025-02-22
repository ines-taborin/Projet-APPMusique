import { Pipe, PipeTransform } from '@angular/core';
import { Liste } from '../interfaces/liste';

@Pipe({
  name: 'chansonsArtiste',
  standalone: true,
})
export class ChansonsArtistePipe implements PipeTransform {
  transform(liste: Liste, artiste: string): Liste {
    var chansonsFiltrees = liste.chansons.filter((chanson) => chanson.artiste.startsWith(artiste));
    liste.chansons = chansonsFiltrees;
    return liste;
  }
}
