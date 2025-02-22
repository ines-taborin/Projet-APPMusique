import {
  Component,
  EventEmitter,
  Input,
  LOCALE_ID,
  Output,
} from '@angular/core';
import localeFrCA from '@angular/common/locales/fr-CA';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgClass } from '@angular/common';
import { Chanson } from '../../interfaces/chanson';
import { ConvertirDureePipe } from '../../pipes/convertir-duree.pipe';
import { ConvertirUnitesPipe } from '../../pipes/convertir-unites.pipe';
import { MatTooltip } from '@angular/material/tooltip';

registerLocaleData(localeFrCA);

@Component({
  selector: 'app-chanson',
  standalone: true,
  imports: [DatePipe, NgClass, ConvertirDureePipe, ConvertirUnitesPipe, MatTooltip, CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-CA' }],
  templateUrl: './chanson.component.html',
  styleUrl: './chanson.component.css',
})
export class ChansonComponent {
  @Input({ required: true })
  chanson!: Chanson;

  @Output()
  onChansonClick: EventEmitter<Chanson> = new EventEmitter<Chanson>();

  onClick(chanson: Chanson) {
    this.onChansonClick.emit(chanson);
  }

  messageTooltip: {[k: string]: string} = {
    '=0': 'aucune lecture',
    '=1': '1 lecture',
    'other': '# lectures'
  };
}
