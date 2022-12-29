import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.component.html',
  styleUrls: ['./modal-status.component.css']
})
export class ModalStatusComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
