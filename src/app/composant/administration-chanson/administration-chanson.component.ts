import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ListesService } from '../../services/listes.service';
import { Liste } from '../../interfaces/liste';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-administration-chanson',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './administration-chanson.component.html',
  styleUrl: './administration-chanson.component.css',
})
export class AdministrationChansonComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private listeService: ListesService,
    public dialogRef: MatDialogRef<AdministrationChansonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { liste?: Liste }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  ngOnInit() {
    this.form = this.fb.group({
      titre: [this.data.liste?.titre, Validators.required],
      sousTitre: [this.data.liste?.sousTitre, Validators.required],
      image: [this.data.liste?.image, Validators.required],
      description: [this.data.liste?.description, Validators.required],
      type: [this.data.liste?.description, Validators.required],
      verifie: [this.data.liste?.verifie ?? false],
      datePublication: [this.data.liste?.datePublication, Validators.required],
      visibilite: [this.data.liste?.visibilite, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const listeModifiee: Liste = this.form.value;
      this.data.liste
        ? this.listeService
            .modifierListe(listeModifiee, this.data.liste!.id)
            .subscribe((res) => console.log(res))
        : this.listeService
            .creerListe(listeModifiee)
            .subscribe((res) => console.log(res));
            this.dialogRef.close(true);
    }
  }
}
