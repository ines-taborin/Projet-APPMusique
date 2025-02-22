import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Liste } from '../../interfaces/liste';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [NgFor],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() listes: Liste[] = [];

  @Input() listeActive: Liste | null = null;

  @Output()
  listeActiveChange: EventEmitter<Liste> = new EventEmitter<Liste>();

  onClick(liste: Liste) {
    this.listeActive = liste;
    this.listeActiveChange.emit(this.listeActive);
  }
}
