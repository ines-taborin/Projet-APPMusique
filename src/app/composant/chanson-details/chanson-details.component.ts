import { Component, Input } from '@angular/core';
import { Chanson } from '../../interfaces/chanson';
import { DatePipe, NgIf } from '@angular/common';
import { ConvertirUnitesPipe } from '../../pipes/convertir-unites.pipe';

@Component({
  selector: 'app-chanson-details',
  standalone: true,
  imports: [NgIf, DatePipe, ConvertirUnitesPipe],
  templateUrl: './chanson-details.component.html',
  styleUrl: './chanson-details.component.css',
})
export class ChansonDetailsComponent {
  @Input()
  chanson: Chanson | null = null;
}
