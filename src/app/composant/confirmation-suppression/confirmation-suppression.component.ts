import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';
import { ListesService } from '../../services/listes.service';

@Component({
  selector: 'app-confirmation-suppression',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './confirmation-suppression.component.html',
  styleUrl: './confirmation-suppression.component.css',
})
export class ConfirmationSuppressionComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationSuppressionComponent>,
    private listeService: ListesService,
    @Inject(MAT_DIALOG_DATA) public data: { message: string; listeId: number }
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.listeService.supprimerListe(this.data.listeId).subscribe((res) => {
      this.dialogRef.close(true);
    });
  }
}
