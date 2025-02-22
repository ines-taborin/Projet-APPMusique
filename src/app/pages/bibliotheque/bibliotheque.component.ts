import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ChangeDetectorRef, Component, OnInit, Pipe } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Liste } from '../../interfaces/liste';
import { ListesService } from '../../services/listes.service';
import { FormsModule } from '@angular/forms';
import { ChansonsArtistePipe } from '../../pipes/chansons-artiste.pipe';
import { CommonModule } from '@angular/common';
import { ChansonParolesPipe } from '../../pipes/chanson-paroles.pipe';
import { Chanson } from '../../interfaces/chanson';
import { ChansonEcouteesPipe } from '../../pipes/chanson-ecoutees.pipe';
import { ListeComponent } from '../../composant/liste/liste.component';
import { ChansonPopulairePipe } from '../../pipes/chanson-populaire.pipe';
import { ListeDetailsComponent } from '../../composant/liste-details/liste-details.component';

@Component({
  selector: 'app-bibliotheque',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatSidenavModule,
    ListeComponent,
    FormsModule,
    CommonModule,
    ListeDetailsComponent
  ],
  providers: [
    ChansonsArtistePipe,
    ChansonParolesPipe,
    ChansonEcouteesPipe,
    ChansonPopulairePipe,
  ],
  templateUrl: './bibliotheque.component.html',
  styleUrl: './bibliotheque.component.css',
})
export class BibliothequeComponent implements OnInit {
  listes: Liste[] = [];
  listeActive: Liste | null = null;
  chansonsNonFiltrees: Chanson[] = [];
  pipeActive: Pipe | null = null;

  text: string = '';
  constructor(
    private listesService: ListesService,
    private artistePipe: ChansonsArtistePipe,
    private chansonParolesPipe: ChansonParolesPipe,
    private chansonEcouteesPipe: ChansonEcouteesPipe,
    private chansonPopulairesPipe: ChansonPopulairePipe,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listesService.getListes().subscribe((res) => {
      this.listes = res;
      this.listeActive = this.listes[0];
      this.chansonsNonFiltrees = { ...this.listeActive }.chansons;
    });
  }

  OnChange() {
    this.chansonsNonFiltrees = { ...this.listeActive! }.chansons;
    this.cdRef.detectChanges();
  }

  onArtisteClick() {
    if (this.pipeActive === this.filtrerArtiste) {
      this.pipeActive = null;
    } else {
      this.pipeActive = this.filtrerArtiste;
    }
    this.transformeDonnées();
  }

  onAvecParolesClick() {
    if (this.pipeActive === this.filtrerAvecParoles) {
      this.pipeActive = null;
    } else {
      this.pipeActive = this.filtrerAvecParoles;
    }
    this.transformeDonnées();
  }

  onChansonPopulaireClick(){
    if(this.pipeActive === this.filtrerChansonsPopulaires){
      this.pipeActive = null;
    } else {
      this.pipeActive = this.filtrerChansonsPopulaires;
    }
    this.transformeDonnées();
  }

  onNombreEcoutesClick() {
    if (this.pipeActive === this.filtrerEcoutes) {
      this.pipeActive = null;
    } else {
      this.pipeActive = this.filtrerEcoutes;
    }
    this.transformeDonnées();
  }

  filtrerArtiste(liste: Liste): Liste {
    return this.artistePipe.transform(liste, this.text);
  }

  filtrerAvecParoles(liste: Liste): Liste {
    return this.chansonParolesPipe.transform(liste);
  }

  filtrerChansonsPopulaires(liste: Liste): Liste {
    return this.chansonPopulairesPipe.transform(liste);
  }

  filtrerEcoutes(liste: Liste): Liste {
    const number = Number(this.text);
    if (!isNaN(number))
      return this.chansonEcouteesPipe.transform(liste, number);
    else return this.listeActive!;
  }

  transformeDonnées() {
    if (this.pipeActive === null) {
      this.listeActive!.chansons = this.chansonsNonFiltrees;
    }
    if (this.pipeActive === this.filtrerArtiste) {
      this.listeActive = this.filtrerArtiste(this.listeActive!);
    }
    if (this.pipeActive === this.filtrerEcoutes) {
      this.listeActive = this.filtrerAvecParoles(this.listeActive!);
    }
    if (this.pipeActive === this.filtrerEcoutes) {
      this.listeActive = this.filtrerEcoutes(this.listeActive!);
    }
    if (this.pipeActive === this.filtrerChansonsPopulaires){
      this.listeActive = this.filtrerChansonsPopulaires(this.listeActive!);
    }
  }

  changementTexte(nouveau: string | null) {
    this.transformeDonnées();
  }
}
