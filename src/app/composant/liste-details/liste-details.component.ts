import { Component, Input, LOCALE_ID, OnChanges, SimpleChanges } from '@angular/core';
import { Liste } from '../../interfaces/liste';
import localeFrCA from '@angular/common/locales/fr-CA';
import { NgIf, registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { ChansonComponent } from '../chanson/chanson.component';
import { ChansonDetailsComponent } from '../chanson-details/chanson-details.component';
import { Chanson } from '../../interfaces/chanson';
import { ConvertirUnitesPipe } from '../../pipes/convertir-unites.pipe';

registerLocaleData(localeFrCA);

@Component({
  selector: 'app-liste-details',
  standalone: true,
  imports: [
    DatePipe,
    NgClass,
    NgFor,
    ChansonComponent,
    NgIf,
    ChansonDetailsComponent,
    ConvertirUnitesPipe
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-CA' }],
  templateUrl: './liste-details.component.html',
  styleUrl: './liste-details.component.css',
})
export class ListeDetailsComponent implements OnChanges {

  @Input() pipe: Function | undefined;

  @Input()
  liste: Liste | null = null;

  chansonActive: Chanson | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    this.chansonActive = null;
  }

  onChansonClick(chanson: Chanson){
    this.chansonActive = chanson;
  }
}
