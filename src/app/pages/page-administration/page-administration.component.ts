import { Component, OnInit } from '@angular/core';
import { Liste } from '../../interfaces/liste';
import { ListesService } from '../../services/listes.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AdministrationChansonComponent } from '../../composant/administration-chanson/administration-chanson.component';
import { ConfirmationSuppressionComponent } from '../../composant/confirmation-suppression/confirmation-suppression.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-page-administration',
  standalone: true,
  imports: [MatIcon, MatTableModule],
  templateUrl: './page-administration.component.html',
  styleUrl: './page-administration.component.css',
})
export class PageAdministrationComponent implements OnInit {
  listes: Liste[] = [];

  datasource = new MatTableDataSource<Liste>([]);

  colonnesAffichees = [
    'id',
    'titre',
    'sousTitre',
    'description',
    'type',
    'verifie',
    'datePublication',
    'visibilite',
    'nombreSauvegarde',
    'actions'
  ];
  constructor(
    private listesService: ListesService,
    private dialogue: MatDialog
  ) {}

  ngOnInit(): void {
    this.chargerListe();
    this.datasource.data = this.listes;
  }

  chargerListe(){
    this.listesService.getListes().subscribe((resultat) => {
      this.listes = resultat;
    })
  }

  onCreerClick() {
    const dialogRef = this.dialogue.open(AdministrationChansonComponent, {
      width: '500px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.chargerListe();
      }
    });
  }

  onSupprimer(liste: Liste) {
    const dialogRef = this.dialogue.open(ConfirmationSuppressionComponent, {
      width: '500px',
      data: { message: 'Voulez-vous vraiment supprimer cette liste ?', listeId: liste.id },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.chargerListe();
      }
    });
  }

  onModifier(liste: Liste) {
    const dialogRef = this.dialogue.open(AdministrationChansonComponent, {
      width: '500px',
      data: { liste: liste },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.chargerListe();
      }
    });
  }
}
